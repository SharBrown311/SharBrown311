import React from "react";
import Issue from "./Issue.jsx";


export default function IssueList(props){
  const { issues, editIssue, deleteIssue, addVote, removeVote, addComment, getUserIssues} = props

  return(
    <div className="issue-list">
      {issues.map((issue, index) => <Issue issue = {issue} key = {index} getUserIssues = {getUserIssues} 
      editIssue = {editIssue} deleteIssue = {deleteIssue} addVote = {addVote}
      removeVote = {removeVote}
      addComment = {addComment}
      />)}
    </div>
  )
}