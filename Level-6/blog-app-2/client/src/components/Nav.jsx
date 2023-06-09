import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(props) {
  const { token, logout } = props
  return (
    <nav className='w3-top'>
      <div className='w3-bar w3-theme-d2 w3-left-align w3-large'>
      <Link to="/profile" className='w3-bar-item w3-button w3-padding-large'><i className = "fa fa-user"></i>Profile</Link>
      <Link to="/public" className='w3-bar-item w3-button w3-padding-large'><i className="fa fa-users"></i>Public</Link>
      {token ? <button className='w3-bar-item w3-button w3-padding-large' onClick={logout}>Logout</button>: <button disabled onClick={logout}>Logout</button>}
      <a href = "" className='w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU' className='w3-circle' style = {{height:"23px", width:"23px"}} alt = "Avatar" />
      </a>
    </div>
    </nav>
  )
}