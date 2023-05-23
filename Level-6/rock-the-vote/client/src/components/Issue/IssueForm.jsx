import React, {useState, useContext} from 'react'
import "../CSS/IssueStyles.css"
import { UserContext } from '../../context/UserProvider';

export default function IssueForm(){

  const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
  };


const [inputs, setInputs] = useState(initInputs);
const { addIssue} = useContext(UserContext);



function handleChange(e) {
  const { name, value } = e.target;
  setInputs(prevInputs => ({
    ...prevInputs,
    [name]: value,
  }));
}

function handleSubmit(e) {
  e.preventDefault();
  addIssue(inputs);
  setInputs(initInputs);
}

const { title, description, imgUrl} = inputs;

return (
  <form onSubmit={handleSubmit} className="issue-form">
    <input
      type = "text"
      name = "title"
      placeholder="Title"
      onChange = {handleChange}   
      value = {title}
      className="issue-inputs"
    />
    <input 
    type = "text"
    name = "description"
    placeholder="Description"
    onChange = {handleChange}
    value = {description}
    className="issue-inputs"
    />
    <input 
    type = "text"
    name = "imgUrl"
    placeholder="Image Address"
    onChange = {handleChange}
    value = {imgUrl}
    className="issue-inputs"
    />
    <button type = "submit">Submit</button>
  </form>

)
}