import React from 'react'
function UpComingEvents() {
  return (
      <div className='column-3-container grid-item'>
      <div className='column column-3 upcoming-events-card'>
        <p>UpComing Events:</p>
        <img className='upcoming-events-image' src='https://tse1.mm.bing.net/th?id=OIP._-WKaWvUKBjjmucU6OkHfgHaE8&pid=Api&rs=1&c=1&qlt=95&w=146&h=97' alt = "forest" style={{width: "100%"}} />
        <p className='upcoming-events-text'><strong>Holiday</strong></p>
        <p className='upcoming-events-text'>Friday 17:00</p>
        <p>
          <button className='w3-button w3-block upcoming-events-button'>Info</button>
        </p>
      </div>
      </div>
  )
}

export default UpComingEvents
