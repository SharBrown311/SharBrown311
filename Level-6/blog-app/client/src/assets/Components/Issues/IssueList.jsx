import React, {useContext} from "react"
import Issue from "./Issue"
import { UserContext } from "../../../Context/UserProvider"

export default function IssueList(props) {
  const { issues, deleteIssue,page, deleteComment, userErr,
  setUserErr } = props
    const {vote} = useContext(UserContext)
  return (
    <div className="issueList">
      {issues ? issues.map(issue =>
        <Issue
          key={issue._id}
          {...issue}
          vote = {vote}
          deleteComment={deleteComment}
          deleteIssue={deleteIssue}
          page={page}
          userErr={userErr}
          setUserErr={setUserErr} />
      ) : null}
    </div>
  )
}