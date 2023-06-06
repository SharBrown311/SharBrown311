import React, { useState} from "react";
import axios from "axios";
import mongoose from "mongoose";

export const IssueContext = React.createContext();

const issueAxios = axios.create();
issueAxios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

const initState = { 
  issues: [] ,
  issue: {}, 
  voteErr: "" };

export default function IssueProvider(props) {
  const [issueState, setIssueState] = useState(initState);

  function getIssues(){
    issueAxios.get("/api/issue")
    .then(res => {
      setIssueState(prevState => ({
        ...prevState, 
        issues: res.data
      }))
    })
    .catch(err => console.log(err))
  }

  function getUserIssues(){
  issueAxios.get(`/api/issue/user`)
    .then(res => {
      setIssueState(prevState => ({
        ...prevState, 
        issues: res.data
      }))
    })
    .catch(err => console.log(err))
  }
  function getIssue(issueId){
    issueAxios.get(`/api/issue/${issueId}`)
    .then(res => {
      setIssueState(prevState => ({
        ...prevState, 
        issue: res.data
      }))
    })
    .catch(err => console.log(err))
  }


  function addIssue(newIssue) {
    issueAxios.post("/api/issue", newIssue)
        .then(res => {
            setIssueState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
}

function vote(_id, direction){
  issueAxios
    .put(`/api/issue/${direction}vote/${_id}`)
    .then(res => {
      setIssueState(prev => ({
        ...prev,
        issues: prev.issues.map(issue =>
          issue._id === _id ? res.data : issue
        )
      }));
    })
    .catch(err => handleVoteErr(err.response.data.errMsg));
};

function getComments(issueId, comment){
  issueAxios
    .get(`/api/issue/${issueId}/comment`)
    .then(res => {
      setIssueState(prevState => {
        const issueToUpdate = {...prevState.issue};
        issueToUpdate.comments.push(...res.data)
        return {
          ...prevState, 
          issue: issueToUpdate
        }
      })
    })
    .catch((err) => console.log(err.response.data.errMsg))
}


    function addComment(issueId, comment){
      issueAxios.post(`/api/issue/${issueId}/comment`, comment)
      .then(res => {
        const issueToUpdate = Object.assign({}, issueState.issue)
        issueToUpdate.comments.push(res.data)
        setIssueState(prevState => ({
          ...prevState, 
          issue: issueToUpdate
        }))
      })
      .catch(err => console.log(err.response.data.errMsg));
    }


    function handleVoteErr(err){
      setIssueState(prevState => ({
        ...prevState, 
        voteErr: err
      }))
    }
 

    function editIssue(issueId, updatedIssue){
      issueAxios.put(`/api/issue/${issueId}`, updatedIssue)
      .then(res => {
        setIssueState(prevState => ({
          ...prevState, 
          issues: prevState.issues.map((issue) => issue._id ? res.data : issue)
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }




function deleteIssue(issueId){
  issueAxios.delete(`/api/issue/${issueId}`)
  .then(res => {
    console.log(res)
    setIssueState(prevState => ({
      ...prevState, 
      issues: prevState.issues.filter(issue => issue._id !== issueId)
    }))
  })
  .catch(err => console.log(err.response.data.errMsg))
}

  return (
    <IssueContext.Provider
      value={{
        ...issueState,
        getIssues,
        getIssue,
        getUserIssues, 
        addIssue,
        vote,
        deleteIssue,
        editIssue,
        getComments,
        addComment
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
}

// ...issueState,
// getIssues, -->works
// getIssue,
// getUserIssues, --> works
// addIssue,  --works -modal no
// vote,    --works
// getComments, 
// addComment



//route matching
//getIssues ==> MATCHES
//getIssue  ==> MATCHES
//getUserIssues  ==> MATCHES
//editIssue  ==> MATCHES
//deleteIssue ==> MATCHES
//addIssue ==> MATCHES
//getComments
//deleteComment
//addComment
//editComment