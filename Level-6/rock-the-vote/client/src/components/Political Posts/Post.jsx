import React from 'react'

function Post() {
  return (
    <div>
      <h5>Issues Component</h5>
        <ul>Item List

        <li>Item
          <ul>List of the Item
            <li>list item upvote/downvote</li>
                <p>only one upvote/downvote per user per issue/item</p>
                <p>total number of votes</p>
            <li>list item title</li>
            <li>list item description</li>
          </ul>
        </li>
        
        
        </ul>
    </div>
  )
}

export default Post
