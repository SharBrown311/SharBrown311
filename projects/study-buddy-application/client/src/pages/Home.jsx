import React from 'react'
import Services from '../components/Page-Components/Services'
import About from '../components/Page-Components/About'
import Clients from '../components/Page-Components/Clients'
import Banner from '../components/Page-Components/Banner'
function Home() {
  return (
    <div className='Home'>
      <Banner />
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home
