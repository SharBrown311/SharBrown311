import React, {useState, useEffect, useContext} from 'react'
import { IssueContext } from '../Context/IssueProvider';
import "./issue.css"
import Comments from '../Comment/Comments'
import CommentForm from '../Comment/CommentForm';
function IssueDetail() {

  const {getIssues, getIssue, issues, vote, addComment, getComments,
    issue: { 
      title, 
      description, 
      imgUrl,
      createdOn,
       comments}
  } = useContext(IssueContext)




  const [commentToggle, setCommentToggle] = useState(false);
  const [commentInput, setCommentInput] = useState("");


  useEffect(() => {
    getIssue();
 }, []);

 const toggler = () => {
  setCommentToggle(p => !p)
};
 const handleChange = e => setCommentInput(e.target.value);
 
 
 const handleSubmit = e => {
   e.preventDefault();
   addComment(_id, { text: commentInput });
 };
  return (
    <div>
    <div>
    <img src = {imgUrl} alt = {title} />
    <p>{createdOn}</p>
    <h1>{title}</h1>
    <p>{description}</p>
    <button onClick={toggler}>Comments</button>
    {commentToggle && (
      <div>
        <Comments
          id={_id}
          getComments={getComments}
          addComment={addComment}
          comments={comments}
          toggler={toggler}
          key = {comments}
          />
        <CommentForm
          comment={commentInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    )}
  </div>
  </div>
);
}

export default IssueDetail
