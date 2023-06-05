import React, {useEffect, useContext} from 'react'
import { IssueContext } from '../Context/IssueProvider'
import IssueList from '../Issues/IssueList';
import "./pages.css"



function Public() {

  const { getPublicIssues, issues, addComment, getComments, vote} = useContext(IssueContext);
  
  useEffect(() => {
    getPublicIssues()
  }, [])


  return (
    <div className='public'>
    <h1>Current Issues: </h1>
      <div>
        {issues?.map(issue => (
          <IssueList 
          {...issue}
          key = {issue._id}
          addComment = {addComment}    
          getComments = {getComments}
          vote = {vote}
          getPublicIssues = {getPublicIssues}
          />
        ))}
      </div>
    </div>
  )
}

export default Public
