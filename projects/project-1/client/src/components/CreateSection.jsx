import React from "react";

const CreateSection = () => {
  if (localStorage.getItem("isLoggedIn")) {
    return (
      <div>
        <h1>Create a New Flashcard Set</h1>
        <p>
          Enter the front and back of the flashcard, and then click
          "Create Flashcard Set".
        </p>
        <form>
          <input type="text" placeholder="Front of Flashcard" />
          <input type="text" placeholder="Back of Flashcard" />
          <button type="submit">Create Flashcard Set</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please Login or Sign Up</h1>
        <p>
          You must be logged in to create a new flashcard set.
        </p>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    );
  }
};

export default CreateSection;