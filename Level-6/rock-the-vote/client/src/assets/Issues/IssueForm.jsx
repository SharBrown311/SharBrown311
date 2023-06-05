import React from "react";
import "./issue.css"
export default function IssueForm(props) {
  const {
    handleChange,
    handleSubmit,
    inputs: { title, description, imgUrl },
    btnText
  } = props;
  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
        className="issue-form-title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description"
        className="issue-form-description"
      />
      <input
      type="text"
      name="imgUrl"
      value={imgUrl}
      onChange={handleChange}
      placeholder="Image URL"
      className="issue-form-image"
    />
      <button>{btnText}</button>
    </form>
  );
}