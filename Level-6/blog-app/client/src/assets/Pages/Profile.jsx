import React, { useContext, useEffect } from "react"
import { UserContext } from "../../Context/UserProvider"
import IssueForm from "../Components/Issues/IssueForm"
import IssueList from "../Components/Issues/IssueList"
import "./pages.css"
export default function Profile() {
  const { memberSince ,user: {
    username,
    _id
  },
    addIssue,
    upVote,
    downVote,
    issueList,
    deleteIssue,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)

  const userIssueList =
    issueList ?
      issueList.filter(issue => {
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
      <h1 className="username-whole"><span className="username-profile">{username}</span><span className="pluraled">'s Profile</span></h1>
      <p>{memberSince}</p>
      <IssueForm addIssue={addIssue} />
      <IssueList
        issues={userIssueList}
        upVote={upVote}
        downVote={downVote}
        deleteIssue={deleteIssue}
        deleteComment={deleteComment}
        page={page}
        userErr={userErr}
        setUserErr={setUserErr} />
    </div>
  )
}