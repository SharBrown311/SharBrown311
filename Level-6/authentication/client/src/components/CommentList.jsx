import React from "react";
import Comment from "./Comment";
import './Styles.css'
export default function CommentList(props) {
  const { comments, deleteComment } = props;

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}
