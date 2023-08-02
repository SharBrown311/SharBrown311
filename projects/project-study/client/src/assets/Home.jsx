import React from 'react'
import Services from './Page-Components/HomePage-Components/Services'
import About from './Page-Components/HomePage-Components/About'
import Clients from './Page-Components/HomePage-Components/Clients'
function Home() {
  return (
    <div className='Home' style={{textAlign: 'center'}}>
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home