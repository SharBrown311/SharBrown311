import React, { useContext } from "react";
import { FormContext } from "./formContext"

// TOP PAGE USER INPUT FORM SECTION

function Form() {
  const {
    onChange,
    onSubmit
  } = useContext(FormContext)

  return (
    <>
      <h1
        className="titleText"
      >🤢Ugly Things🤮</h1>
      <form
        className="userInput"
        onSubmit={onSubmit}>
        <div className="form-control">
        <input
        className="input-title"
          name="title"
          placeholder="Title"
          type="text"
          onChange={onChange}
          />
        <input
          className="input-image"
          name="imgUrl"
          placeholder="Img Url"
          type="text"
          onChange={onChange}
          />
        <input
          className="input-description"
          name="description"
          placeholder="Description"
          type="text"
          onChange={onChange}
          />
          
          </div>
          <div
          className="submit-button-container">
          <button className="submit-button"
          >Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form