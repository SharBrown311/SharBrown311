import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()


const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})
function UserProvider(props) {

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem('token') || "",
    posts: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [postList, setPostList] = useState([])
  const [page, setPage] = useState('')
  const [userErr, setUserErr] = useState("")




  function getAllPosts(){
    userAxios.get("/api/post")
    .then(res => setPostList(res.data))
    .catch(err => console.log(err))
  }

  function signup(credentials){
    axios.post('/auth/signup', credentials)
    .then(res => {
      const {user, token} = res.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      getAllPosts()
      setUserState(prevUserState => ({
        ...prevUserState, 
        user, 
        token
      }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getAllIssues()
        getUserIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  }

  function handleAuthErr(errMsg) {
    setUserState(prevUserState => ({
      ...prevUserState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function getUserPosts(){
    userAxios.get(`/api/post/user/${userId}/posts`)
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState, 
        posts: res.data
      }))
    })
    .catch(err => console.log(err))
  }


  function addPost(newPost){
   userAxios.post("/api/post", newPost)
   .then(res => {
    setUserState(prevUserState => ({
      ...prevUserState, 
      posts: [...prevUserState.posts, res.data]
    }))
    getAllPosts()
    getUserPosts()
   })     
   .catch(err => console.log(err.response.data.errMsg))
  }
  return (
    <UserContext.Provider value = {{
        ...userState, 
        signup, 
        login, 
        logout, 
        resetAuthErr, 
        page, 
        setPage, 
        userErr,
        setUserErr, 
        postList,
        getUserPosts, 
        getAllPosts,
        addPost

    }}>
     {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
