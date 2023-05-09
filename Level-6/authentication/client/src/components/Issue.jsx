import React from "react";
import Comment from "./Comment";
import './Styles.css'
export default function Issue(props) {
  const { title, description, imgUrl, _id } = props;

  return (
    <div className="issue">
      <h1>Title: {title}</h1>
      <h3>Description: {description}</h3>
      <img src={imgUrl} alt={imgUrl} width={300} />
      <Comment _id={_id} />
    </div>
  );
}
