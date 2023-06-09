import React, { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from './IssueForm'
import IssueList from "./IssueList"
import UpComingEvents from "../UnFunctional/UpComingEvents"
import FriendRequest from "../UnFunctional/FriendRequest"
import GroupedLinks from "../UnFunctional/GroupedLinks"
import AlertBox from "../UnFunctional/AlertBox"
import Interests from "../UnFunctional/Interests"

export default function Profile() {
  const { user: {
    username,
    _id
  },
    addIssue,
    upVote,
    downVote,
    issueList,
    deleteIssue,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)

  const userIssueList =
    issueList ?
      issueList.filter(issue => {
        if (issue.user === _id) {
          return issue
        }
      }) : null

      useEffect(() => {
        setPage("profile")
        sortByVotes()
      }, [])
      
      return (
            <div className="w3-container">
            <div className="column-1-container">            
            <div className="column column-1">
    <div className="profile-card grid-item">
      <h4 className="profile-heading"><span className="profile-welcoming">{username}</span>' s Profile!</h4>
      <p className="">
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" alt = "User-image-circle" className="user-image-circle" />
      </p>
      <hr />
      <p className="user-info">
      <i className="fa fa-pencil fa-fw  "></i>Web Developer, MERN</p>
      <p className="user-info"><i className="fa fa-home fa-fw "></i>HomeTown, USA</p>
      <p className="user-info"><i className="fa fa-birthday-cake fa-fw "></i>Jan. 1, 1988</p>
      </div>
      </div>
      </div>
      <GroupedLinks />
      <Interests />
      <AlertBox />
      <IssueForm addIssue={addIssue}/>
      <IssueList
      className = "issue-list-component"
        issues={userIssueList}
        upVote={upVote}
        downVote={downVote}
        deleteIssue={deleteIssue}
        deleteComment={deleteComment}
        page={page}
        userErr={userErr}
        setUserErr={setUserErr} />
        <UpComingEvents />
        <FriendRequest />
        
     
     
  
      
    </div>
  )
}