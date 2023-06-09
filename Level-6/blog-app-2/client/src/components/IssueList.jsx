import React from "react"
import Issue from "./Issue"
export default function IssueList(props) {
  const { issues, upVote, downVote, deleteIssue, page, deleteComment, userErr,
  setUserErr } = props

  return (
    <div className="w3 container w3-card column-2-container ">
    <div className="column-2">
    <div>
      {issues ? issues.map(issue =>
        <Issue
          className = "issue-component"
          key={issue._id}
          {...issue}
          upVote={upVote}
          downVote={downVote}
          deleteComment={deleteComment}
          deleteIssue={deleteIssue}
          page={page}
          userErr={userErr}
          setUserErr={setUserErr} />
      ) : null}
    </div>
    </div>
    </div>
  )
}