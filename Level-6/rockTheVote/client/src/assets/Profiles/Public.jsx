import React, {useContext, useEffect} from "react"
import PostList from "../Posts/PostList"
import { UserContext } from "../../context/UserProvider"

function Public(){
  const {postList, upVote, downVote, deletePost, setPage, userErr, setUserErr, sortByVotes
  } = useContext(UserContext)

  useEffect(() => {
    setPage("public")
    sortByVotes()
  }, [])

  return(
    <div className="public">
      <h3>Posts</h3>
        <PostList 
        posts = {postList}
        upvote = {upVote}
        downVote = {downVote}
        deletePost = {deletePost}
        userErr = {userErr}
        setUserErr = {setUserErr}
        />
    </div>
  )
}
export default Public