import React, {createContext, useState} from 'react'
import axios from 'axios'

export const CommentContext = createContext()


const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default function CommentProvider(props){
  
  const initState = {
    comments: [], 
    errMsg: ""
  };
  

  const [commentState, setCommentState] = useState(initState)



  //adding a comment to an issue
  function addComment(issueId, newComment){
    userAxios.post(`/api/comment/${issueId}`, newComment)
    .then(res => {
      setCommentState(prevState => ({
        ...prevState, 
        comments: [...prevState.comments, res.data]
      }))
    })
    .catch(err => console.log(err))
  }
  //getting all the comments of a specific issue
  function getComments(issueId){
    userAxios.get(`/api/comment/${issueId}`)
    setCommentState(prevState => ({
      ...prevState, 
      comments: res.data
    }))
    .catch(err => console.log(err.response.data.errMsg))
  }


  //editing a comment thats with an issue
  function editComment(issueId, commentId, updatedComment){
    userAxios.put(`/api/comment/${issueId}/${commentId}`, updatedComment)
    .then(res => {
      setCommentState(prevState => ({
        ...prevState, 
        comments: prevState.comments.map(comment => comment._id === commentId ? res.data : comment)
      }));
    })
    .catch(err => console.log(err))
  }

  ///deleting a comment on an issue
  function deleteComment(issueId, commentId){
    userAxios.delete(`/api/comment/${issueId}/${commentId}`)
    .then(res => {
      setCommentState(prevState => ({
        ...prevState, 
        comments: prevState.comments.filter(comment => comment._id !== commentId)
      }))
    })
    .catch(err => console.log(err))
  }

  //setting a comment err message so the err can display on the page in the application

  function handleCommentErr(errMsg){
    setCommentState(prevState => ({
      ...prevState, 
      errMsg
    }))
  }



  ///reset the comment error message

  function resetCommentErr(){
    setCommentState(prevState => ({
      ...prevState, 
      errMsg: ''
    }))
  }

  
  return(
    <CommentContext.Provider value = {{
      ...commentState, 
      addComment, 
      editComment, 
      getComments,
      deleteComment, 
      handleCommentErr, 
      resetCommentErr
    }}>
      {props.children}
    </CommentContext.Provider>
  )
}