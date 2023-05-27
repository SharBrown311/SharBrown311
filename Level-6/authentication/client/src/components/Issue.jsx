import React from "react";
import "./Styles.css"
import Comment from "./Comment";

export default function Issue(props) {
  const {issue} = props;
  
  return (
    <div className="issue-container">
    <div className="issue-card">
    <img className = "issue-image" src = {issue.imgUrl} alt = {issue.title} />
      <h3 className="issue-title">{issue.title}</h3>
      <p className="issue-description">{issue.description}</p>
      <div className="comment-component-container">
      <Comment/>
      </div>
      </div>


    </div>
  );
}