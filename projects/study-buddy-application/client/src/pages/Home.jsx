import React from 'react'
import Modal from '../components/Modal/Modal'
import Services from '../components/Services'
import About from '../components/About/About'
import Clients from '../components/Clients'

function Home() {
  return (
    <div>
      <Modal />
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home
