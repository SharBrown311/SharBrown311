import React from 'react'
function FriendRequest() {
  return (


        <div className='column-3-container grid-item'>
      <div className = "friend-request-card card column column 3 ">
      <div className=''>
        <div>
      <p>Friend Request</p>
      <img src='https://www.w3schools.com/w3images/avatar6.png' alt = "Avatar" style={{width: "50%"}} className='friend-request-image' />
      <br />
      <span className = "friend-request-name">Jane Doe</span>
      </div>
      <div className='w3-row w3-opacity friend-request-button-bar'>
        <div className='w3-half friend-request-left-button-container'><button className="w3-button w3-block w3-green w3-section" title="Accept"><i className="fa fa-check"></i></button></div>
        <div className='w3-half friend-request-right-button-container'>
        <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove"></i></button>
        </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default FriendRequest
