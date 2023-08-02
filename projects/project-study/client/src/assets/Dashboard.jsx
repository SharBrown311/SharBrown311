import React, {useEffect, useState} from 'react'

import Tabs from './TabContainer/Tabs'


function Dashboard() {
  return (
    <div className='Dashboard'>
      <div className='tabs-container'>
        <Tabs />
      </div>
    </div>
  )
}

export default Dashboard
