import React, { useContext, useEffect } from "react"
import {UserContext} from "../../Context/UserProvider"
import IssueList from "../Components/Issues/IssueList"
import IssueForm from "../Components/Issues/IssueForm"

export default function Profile() {
  const { user: {
    username,
    _id
  },
    addIssue,
    upVote,
    downVote,
    issues,
    deleteIssue,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)

  const userIssues =
    issues ?
      issues.filter(issue => {
        if (issue.user === _id) {
          return issue
        }
      }) : null

      useEffect(() => {
        setPage("profile")
        sortByVotes()
      }, [])
      
      return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <IssueForm addIssue={addIssue} />
      <h2>Your Issues</h2>
      <IssueList
        issues={issues}
        upVote={upVote}
        downVote={downVote}
        deleteIssue={deleteIssue}
        deleteComment={deleteComment}
        page={page}
        userErr={userErr}
        setUserErr={setUserErr} 
        userIssues = {userIssues}/>
    </div>
  )
}