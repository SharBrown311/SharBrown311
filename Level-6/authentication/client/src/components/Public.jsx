import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'

export default function Public(){
    const { 
        issues, 
        addComment,
        addVote, 
        removeVote,
        getPublicIssues } = useContext(UserContext)

    useEffect(() => {
        getPublicIssues()
    }, [])

    return (
        <div>
            <h2 className='text-center pt-3'>The full list of Rock the Vote issues</h2>
            <IssueList issues={issues}
                removeVote = {removeVote}
                addComment = {addComment}
                addVote = {addVote}
            />
        </div>
        
    )
}