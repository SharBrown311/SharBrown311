import React from "react";

export default function Comments(props) {
  const { comments } = props;
  return (
    <div>
      {comments?.map(comment => (
        <p key={comment._id}>{comment}</p>
      ))}
    </div>
  );
}