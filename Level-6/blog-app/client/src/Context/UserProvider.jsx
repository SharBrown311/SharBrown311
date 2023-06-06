import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// INSERTS TOKEN PRIOR TO REQUEST
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem('token') || "",
    issues: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [issues, setIssues] = useState([])
  const [page, setPage] = useState("")
  const [userErr, setUserErr] = useState("")


  function sortByVotes() {
    issues && issues.sort((a, b) => {
      return b.votes - a.votes
    })
  }

  function getAllIssues() {
    userAxios.get("/api/issue")
      .then(res => setIssues(res.data))
      .then(sortByVotes())
      .catch(err => console.log(err))

  }

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getAllIssues()
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

  function getUserIssues() {
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
  }

  function addIssue(newIssue) {
    userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: [...prevUserState.issues, res.data]
        }))
        getAllIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteIssue(issueId) {
    userAxios.delete(`/api/issue/${issueId}`)
    const filteredArr = issues.filter(issue => {
      if (issueId !== issue._id) {
        return issue
      }
    })
    setIssues(
      filteredArr
    )
      .catch(err => console.log(err))
  }

  function vote(_id, direction){
    issues.foreach(issue => {
        if(issue._id === votedIssue && userState.user._id === issue.user){
          return setUserErr("User Cannot Vote on their own Issues.")
        }else if(issue._id === votedIssue && issue.usersWhoHaveVoted.includes(userState.user._id)){
          return setUserErr("User cannot vote more than one time per issue.")
        }else if(issue._id === votedIssue){
          return setUserErr("")  
        }
    });
    userAxios
      .put(`/api/issue/${direction}vote/${_id}`)
      .then(res => {
        setUserState(prev => ({
          ...prev,
          issues: prev.issues.map(issue =>
            issue._id === _id ? res.data : issue
          )
        }));
      })
      .catch(err => handleVoteErr(err.response.data.errMsg));
  };



  
  function handleVoteErr(err){
    setUserState(prevState => ({
      ...prevState, 
      voteErr: err
    }))
  }

  function addComment(commentIssue, issueId) {
    userAxios.put(`/api/issue/addcomment/${issueId}`, commentIssue)
      .then(res => {
        const updateCommentsArr = issues.map(issue => {
          if (issueId === issue._id) {
            issue.comments.push(commentIssue)
            return issue
          } else {
            return issue
          }
        })
        setIssues(
          updateCommentsArr
        )
      })
      .catch(err => console.log(err))
  }

  function deleteComment(comments, issueId) {
    userAxios.put(`/api/issue/deletecomment/${issueId}`, comments)
      .then(res => {
        const updateCommentsArr = issues.map(issue => {
          if (issueId === issue._id) {
            issue = res.data
            return issue
          } else {
            return issue
          }
        })
        setIssues(
          updateCommentsArr
        )
      })
      .catch(err => console.log(err))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        deleteIssue,
        issues,
        vote,
        addComment,
        deleteComment,
        setPage,
        page,
        resetAuthErr,
        userErr,
        setUserErr,
        sortByVotes
      }}>
      {props.children}
    </UserContext.Provider>

  )
}