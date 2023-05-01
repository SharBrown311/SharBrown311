import React from 'react'
import Post from './Post'

function PostList(props){
  const { posts, upVote, downVote, deletePost, page, deleteComment, userErr, setUserErr} = props

  return (
    <div className='postList'>
      {posts ? posts.map(post => 
          <Post
            key = {post._id}
            {...post}
            upVote = {upVote}
            downVote = {downVote}
            deleteComment = {deleteComment}
            deletePost = {deletePost}
            page = {page}
            userErr = {userErr}
            setUserErr= {setUserErr}
            />
        ) : null}

    </div>
  )
}

export default PostList
