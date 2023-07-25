import React from 'react'
import Services from '../components/Services'
import About from '../components/About/About'
import Clients from '../components/Clients'
import Header from '../components/Header/Header'

function Home() {
  return (
    <div className='Home' id = 'home'>
    <Header />

    
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home
