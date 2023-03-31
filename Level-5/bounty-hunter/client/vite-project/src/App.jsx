import './App.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  const [bounties, setBounties] = useState([])

  useEffect(() =>{
    axios.get('/bounty')
    .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
