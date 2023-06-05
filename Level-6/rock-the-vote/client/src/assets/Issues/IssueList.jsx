import React, {useEffect, useContext, useState} from 'react'
import "./issue.css"
import AddIssue from './AddIssue'
import Issue from './Issue'
import { IssueContext } from '../Context/IssueProvider'



export default function IssueList(props){
const {upVotes, downVotes, comments} = props
  const {
  getIssues, 
  issues, 
  vote, 
  addComment, 
  getComments, 
  editIssue, 
  deleteIssue,
} = useContext(IssueContext)
const [toggle, setToggle] = useState(false);


useEffect(() => {
  getIssues();
}, []);

const toggler = () => setToggle(p => !p);

return(
  <div>
  <button onClick={toggler}>Add Issue</button>
  <AddIssue toggler={toggler} show={toggle}/>
  {issues?.map(issue => (
    <Issue
       key = {issue._id}
      {...issue}
      editIssue = {editIssue}
      deleteIssue = {deleteIssue}
      vote = {vote}
      addComment = {addComment}
      getComments = {getComments}
      getIssues = {getIssues}
      comments = {comments}
    />
  ))}
</div>
);
}