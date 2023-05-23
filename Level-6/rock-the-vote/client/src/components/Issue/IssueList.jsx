import React, {useContext} from 'react'
import "../CSS/IssueStyles.css"
import { UserContext } from '../../context/UserProvider'
//import Issue from "./Issue"
import IssueContainer from './IssueContainer'


function IssueList() {
  const {issues, editIssue, deleteIssue} = useContext(UserContext)
  console.log(issues)
  return (
    <div>
    {issues.map(issue => 
      <IssueContainer key = {issue._id}
        issue = {issue} editIssue = {editIssue} deleteIssue = {deleteIssue}
      />
    )}
</div>
  )
}

export default IssueList
