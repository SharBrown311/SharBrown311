import React, {useContext} from 'react'
import Comment from './Comment';
export default function CommentList() {
  const {comments} = useContext(UserContext)
  console.log(comments)
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
