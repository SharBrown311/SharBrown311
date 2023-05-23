import React, {useContext } from 'react'
//import axios from 'axios'
import { UserContext } from '../context/UserProvider'
import Issue from './Issue'

export default function IssueList(){
  const {issues} = useContext(UserContext)
  console.log(issues)

    return (
      <div>
          {issues.map(issue => 
            <Issue key = {issue._id}
              issue = {issue}
            />
          )}
      </div>
    )
}