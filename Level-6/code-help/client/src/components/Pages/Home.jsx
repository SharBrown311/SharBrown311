import React, {useContext} from 'react'
import IssueForm from '../Issues/IssueForm'
import { UserContext } from '../../context/UserProvider'
import { IssueContext } from '../../context/IssueProvider'
import IssueList from '../Issues/IssueList'

function Home() {
  const {
    user: {
      username, 
      _id
    }, 
    token
  } = useContext(UserContext)
  const {addIssue} = useContext(IssueContext)
  return (
    <div className='home-page'>
      <div className='issue-wrapper'>
      <h4 className='ask-issue'>
        Post a new Issue
      </h4>
      <IssueForm addIssue = {addIssue} />
      <div className='posted-issue-wrapper'>
        <IssueList userId = {_id} />
      </div>
      </div>
    </div>
  )
}

export default Home
