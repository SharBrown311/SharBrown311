import React, { useContext } from 'react'
import IssueForm from '../assets/IssueForm'
import Issues from "../assets/Issues"
import { UserContext } from '../context/UserProvider.jsx'
import { IssuesContext } from '../context/IssuesProvider'

const Home = () => {
  const { 
    user: {
       username,
       _id
     },
    token,
  } = useContext(UserContext)

  const {
    addIssue
  } = useContext(IssuesContext)

  const firstLetter = token ? username.charAt(0).toUpperCase() : '';
  const usernameCased = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();


  return (
    <div className="home">
      <div className="post">
        <div className="profile-pic">{firstLetter}</div>
        <div className="post-wrapper">
          <h3 className="issue-question">Have an issue to discuss, {usernameCased}?</h3>
          <IssueForm addIssue={addIssue} />
        </div>
      </div>
      <div className="issues-wrapper">
          <Issues userId={_id}/>
      </div>
    </div>
  )
}

export default Home