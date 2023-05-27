import React, {useContext, useState, useEffect} from 'react'
import { IssueContext } from '../../context/IssueProvider'
import Issue from './Issue'
import { UserContext } from '../../context/UserProvider'
import { CommentContext } from '../../context/CommentProvider'
import CommentForm from '../Comments/CommentForm'
import CommentList from '../Comments/CommentList'
  export default function IssueList(){
    const {comments, getComments} = useContext(CommentContext)
    const {issues, getUserIssues, likeIssue, dislikeIssue} = useContext(IssueContext)
    console.log(issues)
    const {
      user: {username, _id}, 
      token
    } = useContext(UserContext)
    const [currentIssueId, setCurrentIssueId] = useState()
    const [commentsAppearing, setCommentsAppearing] = useState(false)

    useEffect(() => {
      const getInfo = () => {
        getUserIssues(user._id);
        if(currentIssueId){
          getComments(currentIssueId)
          setCommentsAppearing(true)
        }else{
          setCommentsAppearing(false)
        }
      }
      getInfo()
    }, [user._id, currentIssueId])
      return (
        <div>
            {issues?.map(issue => 
              <div className='comment-section' key={issue._id}>
              <Issue {...issue} />
              <span className='likes-counter'>
                {issue.likes.length === 0 ? (
                  ''
                ) : (
                  <i className='fa-solid fa-thumbs-up'></i>
                )}
    
                {/*  Using IIFE (Immediately Invoked Function Expression) */}
                {(() => {
                  const userLike = issue.likes.filter(
                    (like) => like.user === user._id
                  );
                  const otherLikes = issue.likes.length - userLike.length;
                  if (userLike.length > 0 && otherLikes > 2) {
                    return `You and ${otherLikes} others`;
                  } else if (userLike.length > 0 && otherLikes === 0) {
                    return `${username}`;
                  } else if (userLike.length === 0 && otherLikes === 0) {
                    return '';
                  } else if (userLike.length === 0 && otherLikes === 1) {
                    return `${issue.likes?.map((like) => `${like.username}`)}`;
                  } else if (userLike.length > 0 && otherLikes === 1) {
                    return `${issue.likes
                      ?.map((like) => `${like.username}`)
                      .join(' and ')}`;
                  } else {
                    return `${otherLikes}`;
                  }
                })()}
              </span>
              <div className='comment-btn-wrapper'>
                <div className='likes-btn-wrapper'>
                  <button onClick={() => likeIssue(issue._id)}>
                    <span>
                      <i className='fa-regular fa-thumbs-up'></i>
                    </span>
                  </button>
                  <button onClick={() => dislikeIssue(issue._id)}>
                    <span>
                      <i className='fa-regular fa-thumbs-down'></i>
                    </span>
                  </button>
                </div>
                <button
                  onClick={() =>
                    setCurrentIssueId(
                      currentIssueId === issue._id ? null : issue._id
                    )
                  }
                >
                  {currentIssueId === issue._id ? (
                    <span>
                      <i className='fa-regular fa-comment'></i> Comments{' '}
                      {comments.length}
                    </span>
                  ) : (
                    <span>
                      <i className='fa-regular fa-comment'></i> Comment
                    </span>
                  )}
                </button>
              </div>
              {currentIssueId === issue._id && (
                <>
                  <CommentForm issueId={issue._id} />
                  {commentsAppearing && (
                    <CommentList comments={comments} issueId={issue._id} />
                  )}
                </>
              )}
            </div>
          )}
        </div>
      );
    }