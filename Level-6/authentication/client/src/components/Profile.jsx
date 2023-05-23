import React, { useContext, useEffect } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'

import { UserContext } from '../context/UserProvider.jsx'


export default function Profile() {
    const {
        user: {
            username
        },
        addIssue,
        getUserIssues,
        issues,
        editIssue, 
        deleteIssue, 
        addVote, 
        removeVote,
        addComment
    } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
    }, [])

    return (
        <div>
            <div className='container bg-light py-3 my-3'>
                <h1>Welcome {username}!</h1>
                <p>Add an issue</p>
                <IssueForm addIssue={addIssue} />
            </div>

            <h3 className='text-center'>Issues you've added</h3>
            <IssueList issues={issues} editIssue = {editIssue}
            deleteIssue = {deleteIssue}
            addVote = {addVote}
            removeVote = {removeVote}

            
            />
        </div>
    )
}