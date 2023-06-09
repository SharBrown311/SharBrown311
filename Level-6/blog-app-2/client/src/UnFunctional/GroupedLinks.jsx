import React from 'react'
function GroupedLinks() {
  return (
      <div className='column-1-container grid-item'>
      <div className='grouped-links-container card'>
        <button onClick="myFunction('Demo1')" className='w3-button w3-block w3-theme-11 w3-left-align grouped-link'>
          <i className='fa fa-circle-o-notch fa-fw w3-margin-right'></i>
          My Groups
        </button>
        <div id = "Demo1" className='w3-hide w3-container'>Some Text...</div>
      <button className='w3-button w3-block w3-theme-11 w3-left-align grouped-link' onClick="myFunction('Demo2')">
        <i className='fa fa-calendar-check-o fa-fw w3-margin-right'></i>
        My Events
      </button>
      <div id = "Demo2" className='w3-hide w3-container'><p>Some other text..</p>
      </div>
      <button className=' w3-button w3-block w3-theme-11 w3-left-align grouped-link' onClick="myFunction('Demo3')">
        <i className='fa fa-users fa-fw w3-margin-right'>
        </i>
        My Photos
      </button>
      <div id = "Demo3" className='w3-container w3-hide '>
          <div >
            <br />
            <div className='w3-half'>
              <img src='https://www.w3schools.com/w3images/lights.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
            </div>
            <div className='w3-half'>
              <img src='	https://www.w3schools.com/w3images/nature.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
            </div>
            <div className='w3-half'>
              <img src='https://www.w3schools.com/w3images/mountains.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
            </div>
            <div className='w3-half'>
              <img src='https://www.w3schools.com/w3images/forest.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
            </div>
            <div className='w3-half'>
              <img src='https://www.w3schools.com/w3images/nature.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
            </div>
            <div className='w3-half'>
              <img src='https://www.w3schools.com/w3images/snow.jpg' className='w3-margin-bottom' style={{width: "100%"}} />
         
            </div>
          </div>
          </div>
      </div>
      </div>
  )
}

export default GroupedLinks
