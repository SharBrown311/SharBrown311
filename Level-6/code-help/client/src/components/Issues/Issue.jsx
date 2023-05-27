import React, { useContext } from 'react'
import CommentForm from '../Comments/CommentForm';

import { UserContext } from '../../context/UserProvider';
import { IssueContext } from '../../context/IssueProvider';

export default function Issue(props) {
  const {title, description, imgUrl, _id, createdAt} = props;

  const {
    token, 
    user: {username}, 
} = useContext(UserContext)
  
const {editIssue, deleteIssue} = useContext(IssueContext)

const [issue, setIssue] = useState({
  title, 
  description, 
  imgUrl
})

const [isEditing, setIsEditing] = useState(false);

const [show, setShow] = useState(false);

const handleShow = () => setShow(true);

const handleClose = () => {
  setShow(false);
  setIsEditing(!isEditing);
};

function handleEdit() {
  setIsEditing(!isEditing);
  handleShow();
}

function handleDelete() {
  deleteIssue(_id);
}

function handleSave() {
  editIssue(_id, issue);
  setIsEditing(false);
  handleClose();
}

  return (
    <div className="issue-container">
    <div className="issue-card">
    <img className = "issue-image" src = {issue.imgUrl} alt = {issue.title} />
      <h3 className="issue-title">{issue.title}</h3>
      <p className="issue-description">{issue.description}</p>
      <div className="comment-component-container">

      </div>
      </div>
    <div className='button-container'>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

    </div>

    </div>
  );
}
