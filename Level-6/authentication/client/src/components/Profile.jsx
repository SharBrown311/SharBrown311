import React, { useContext } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";
import './Styles.css'
export default function Profile() {
  const {
    user: { username },
    addIssue,
    issues,
  } = useContext(UserContext);

  return (
    <div className="entire-profile">
    <div className="profile">
      <h3 style = {{textAlign:"center"}}>Welcome {username}</h3>
    
      <IssueForm addIssue={addIssue} />
      </div>
      <div className="profile-posts">
      <h3>Your Posts</h3>
      <IssueList issues={issues} />
      </div>
      </div>
  );
}
