import React from 'react'
function AlertBox() {
  return (
 
    <div className='column-1-container grid-item'>
    <div className="column column-1 card ">
    <span onClick="this.parentElement.style.display='none'" className="w3-button w3-theme-l3 w3-display-topright">
      <i className="fa fa-remove"></i>
    </span>
    <p><strong>Hey!</strong></p>
    <p>People are looking at your profile. Find out who.</p>
  </div>
  </div>

  )
}

export default AlertBox
