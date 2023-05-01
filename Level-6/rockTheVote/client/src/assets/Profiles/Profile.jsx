import React, { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserProvider"
import PostForm from "../Posts/PostForm"
import PostList from "../Posts/PostList"

export default function Profile() {
  const { user: {
    username,
    _id
  },
    addPost,
    upVote,
    downVote,
    postList,
    deletePost,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)

  const userPostList =
    postList ?
      postList.filter(post => {
        if (post.user === _id) {
          return post
        }
      }) : null

      useEffect(() => {
        setPage("profile")
        sortByVotes()
      }, [])
      
      return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <PostForm addPost = {addPost } />
      <h2>Your Posts</h2>
      <PostList
        posts={userPostList}
        upVote={upVote}
        downVote={downVote}
        deletePost={deletePost}
        deleteComment={deleteComment}
        page={page}
        userErr={userErr}
        setUserErr={setUserErr} />
    </div>
  )
}