import React, { useState, useEffect, useContext } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";

function ProfileIssues(props) {
  const {
    user: {
      username
    }, 
    getUserIssues, 
    addIssue, 
    issues, 
    editIssue, 
    deleteIssue, 
    addVote, 
    removeVote, 
    addComment
  } = useContext(UserContext)
  console.log(issues)

  return (
    <div className="profile">
    <h1>Welcome @{username}!</h1>
    <h3>Post a new Issue</h3>
    <IssueForm submit={addIssue} btnText = "Add Issue" />
    <h3>Your personal issues</h3>
    <IssueList issues = {issues} getUserIssues = {getUserIssues} editIssue = {editIssue} deleteIssue = {deleteIssue} 
    addVote = {addVote} removeVote = {removeVote} addComment = {addComment}

    />
    </div>
  )
}

export default ProfileIssues
