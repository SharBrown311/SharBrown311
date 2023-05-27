import React, { useState, useEffect, useContext } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const IssueContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});


export default function IssueProvider(props){
  const initState = {
    issues: []
  }

  const [issueState, setIssueState] = useState(initState)

  const initPublic = {
    publicIssues: []
  }


  const [publicIssueList, setPublicIssueList] = useState(initPublic)

  

  //get user issues
  function getUserIssues(){
    userAxios.get("/api/issue/user")
    .then(res => {
      setIssueState(prevState=> ({
        ...prevState, 
        issues: res.data
      }))
    })
  }

//get the public Issues
function getPublicIssues(){
  userAxios.get("/api/issue")
  .then(res => {
    setPublicIssueList(prevState => ({
      ...prevState, 
      publicIssues: res.data
    }))
  })
  .catch(err => console.log(err.response.data.errMsg))
}

/// add a users issue
function addIssue(newIssue){
  userAxios.post('/api/issue', newIssue)
  .then(res => {
    setIssueState(prevState => ({
      ...prevState, 
      issues: [...prevState.issues, res.data],
    }));
  })
  .catch(err => console.log(err))
}

///delete a users issue
 
function deleteIssue(issueId){
  userAxios.delete(`/api/issue/${issueId}`)
  .then(res => {
    setIssueState(prevState => ({
      ...prevState, 
      issues: prevState.issues.filter(issue => issue._id !== issueId),
    }))
  })
  .catch(err => console.log(err))
}


//edit a users issue
function editIssue(issueId, updatedIssue){
  userAxios.put(`/api/issue/${issueId}`, updatedIssue)
  .then(res => {
    setIssueState(prevState => ({
      ...prevState, 
      issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
    }))
  })
  .catch(err => console.log(err))
}
//like an issue / upvote
function likeIssue(issueId){
  userAxios.put(`/api/issue/like/${issueId}`)
  .then(res => {
    //then find the index of the issue you need to update
    const issueIndex = issueState.issues.findIndex(issue => issue._id === issueId)

    //create a copy of the issues array with the updated issues
    const updatedIssues = [
      ...issueState.issues.slice(0, issueIndex),
      {
        ...issueState.issues[issueIndex], 
        likes: res.data, 
      },
      ...issueState.issues.slice(issueIndex + 1),
    ];

    //update issueState with a new array of issues
    setIssueState(prevState => ({
      ...prevState, 
      issues: updatedIssues,
    }))
    //get the public issues function to update the state
    getPublicIssues();
  })
  .catch(err => console.log(err))
}


function dislikeIssue(issueId){
  userAxios.put(`/api/issue/unlike/${issueId}`)
  .then(res => {
    setIssueState(prevState => ({
      ...prevState, 
      issues: prevState.issues.map(issue => {
        if(issue._id === issueId){
          return{
            ...issue, 
            likes: res.data,
          }
        }
        return issue;
      })
    }))
    //update the state and get the getpublicIssues function to fire
    getPublicIssues();

  })
  .catch(err => console.log(err))
}


//on mount fire the getUserIssues, and getpublicIssues function

useEffect(() => {
  getPublicIssues
}, [])

return(
  <IssueContext.Provider value={{
    ...issueState,
    ...publicIssueList,
    ...addIssue,
    deleteIssue,
    editIssue, 
    getUserIssues, 
    getPublicIssues,
    likeIssue, 
    dislikeIssue
  }}>
  {props.children}
  
  </IssueContext.Provider>
)
}