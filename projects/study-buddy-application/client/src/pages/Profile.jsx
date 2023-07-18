import React from 'react'
import DashBoard from '../components/DashBoard.jsx/DashBoard'

function Profile() {
  if(localStorage.getItem("isLoggedIn")){
    return (
      <>
        <DashBoard />
      </>
    )
  }else{
    return (
      <ErrorPage />
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default Profile
