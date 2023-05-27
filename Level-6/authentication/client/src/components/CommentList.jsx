import React, { useContext } from 'react'
import Comment from './Comment'
import { UserContext } from '../context/UserProvider';

export default function CommentList() {
  const {comments} = useContext(UserContext)
  return (
    <div className='comment-list'>
      {comments?.map(comment =>
        <Comment key={comment._id}
          comment={comment}
        />
  )}
    </div>
  );
}
