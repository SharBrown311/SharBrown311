import React, {useState} from 'react'
import axios from 'axios'


export const UserContext = React.createContext()

// inserts the token before the request
  const axiosUser = axios.create()
  axiosUser.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization =
     `Bearer ${token}`
    return config
  })

  export default function UserProvider(props){
    const initState = {
      user: JSON.parse(localStorage.getItem("user")) || {}, 
      token: localStorage.getItem('token') || "", 
      posts: [], 
      errMsg: ""
    }
    const [userState, setUserState] = useState(initState)
    const [postList, setPostList] = useState()
    const [page, setPage] = useState("")
    const [userErr, setUserErr] = useState("")


function sortByVotes(){
  postList && postList.sort((a, b) =>{
    return b.votes - a.votes
  })
}


function getAllPosts(){
  axiosUser.get("/api/post")
  .then(res => setPostList(res.data))
  .then(sortByVotes())
  .catch(err => console.log(err))
}



function signup(credentials){
  axios.post("/auth/signup", credentials)
  .then(res => {
    const {user, token } = res.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    getAllPosts()
    setUserState(prevUserState => ({
      ...prevUserState, 
      user, 
      token
    }))
  })
  .catch(err => handleAuthError(err.res.data.errMsg))
}
function login(credentials){
  axios.post("/auth/login", credentials)
    .then(res => {
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      getAllPosts()
      getUserPosts()
      setUserState(prevUserState => ({
        ...prevUserState, 
        user, 
        token
      }))
    })
    .catch(err => handleAuthError(err.res.data.errMsg))
}

function logout(){
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  setUserState({
    user: {}, 
    token: "", 
    posts: []
  })
}
function handleAuthError(errMsg){
  setUserState(prevUserState => ({
    ...prevUserState, 
    errMsg
  }))
}

  function resetAuthError(){
    setUserState(prevState => ({
      ...prevState, 
      errMsg: ""
    }))
  }

  function getUserPosts(){
    axiosUser.get("/api/post/user")
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState, 
        posts: res.data
      }))
    })
    .catch(err => console.log(err))
  }

  function addPost(newPost){
    axiosUser.post("/api/post", newPost)
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState, 
        posts: [...prevUserState.posts, res.data]
      }))
      getAllPosts()
    })
    .catch(err => console.log(err.res.data.errMsg))
  }


  function deletePost(postId){
    axiosUser.delete(`/api/post/${postId}`)
    const filteredPosts = postList.filter(post => {
      if(postId !== post._id){
        return post
      }
    })
    setPostList(
      filteredPosts
    )
    .catch(err => console.log(err))
  }
  function upVote(votedPost){
    postList.forEach(post => {
      if(post._id === votedPost && userState.user._id === post.user){
        return setUserErr("Users cannot vote for their own posts.")
      }else if(post._id === votedPost && post.votedUsers.includes(userState.user._id)){
        return setUserErr("User has already voted")
      }else if(post._id === votedPost){
        setUserErr("")
        axiosUser.put(`api/post/upvote/${votedPost}`)
          .then(res => {
            const updatedPostArr = postList.map(post =>{
              if(votedPost === post._id){
                return res.data
              }else{
                return post
              }
            })
            setPostList(
              updatedPostArr
            )
          })
          .catch(err => console.log(err))
      } else {
        return null
      }
    })
  }
  function downVote(votedPost){
    postList.forEach(post =>{
      if(post._Id === votedPost && userState.user._id === post.user){
        return setUserErr("Users cannot vote for their own posts.")
      }else if (post._id === votedPost && post.votedUsers.includes(userState.user._id)){
        return setUserErr("User has already voted.")
      }else if(post._id === votedPost){
        setUserErr("")
        return axiosUser.put(`api/post/downvote/${votedPost}`)
          .then(res => {
            const updatedPostArr = postList.map(post => {
              if(votedPost === post._id){
                return res.data
              }else{
                return post
              }
            })
            setPostList(
              updatedPostArr
            )
          })
          .catch(err => console.log(err))
      }
    })
  }
  function addComment(commentPost, postId){
    axiosUser.put(`api/post/addcomment/${postId}`, commentPost)
    .then(res => {
      const updateCommentsArr = postList.map(post => {
        if(postId === post._id){
          post.comments.push(commentPost)
          return post
        }else{
          return post
        }
      })
      setPostList(
        updateCommentsArr
      )
    })
    .catch(err =>console.log(err))
  }
  function deleteComment(comments, postId){
    axiosUser.put(`api/post/deletecomment/${postId}`, comments)
    .then(res => {
      const updateCommentsArr = postList.map(post => {
        if(postId === post._id){
          post = res.data
          return post
        }else{
          return post
        }
      })
      setPostList(
        updateCommentsArr
      )
    })
    .catch(err => console.log(err))
  }
  return(
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addPost,
        deletePost,
        postList,
        upVote,
        downVote,
        addComment,
        deleteComment,
        setPage,
        page,
        resetAuthError,
        userErr,
        setUserErr,
        sortByVotes
      }}>
      {props.children}
    </UserContext.Provider>
  )
  }