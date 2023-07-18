import React from 'react'

function NotLoggedIn() {
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

export default NotLoggedIn
