export default function CommentList(props) {
  const { comments, _id, page, deleteComment } = props;
  return (
    <div className='commentList'>
      {comments.length >= 1 && <h2>Comments</h2>}
      {comments?.map((comment) => (
        <Comment 
          key={`${_id}-${comment._id}`} 
          {...comment} 
          comments = {comments}
          _id={_id}
          commentId={`${_id}-${comment._id}`} 
          page={page}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}
