// import { useState, useEffect } from 'react'
// import axios from 'axios'
import './App.css'
import Bounties from './assets/Bounties'

function App() {
  // const [bounties, setBounties] = useState([])

  // useEffect(() =>{
  //   axios.get('/bounty')
  //     .then(res => setBounties(res.bounties))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className='App'>
    <h1 className='title'>Bounty Hunter</h1>
      <Bounties/>
    </div>
    )
}

export default App
