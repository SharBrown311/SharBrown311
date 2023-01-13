import React from 'react'
import Navbar from './assets/Navbar'
import travelSpots from './travelSpots'
import Card from './assets/Card'
import './App.css'




function App() {
  const travelComponents = travelSpots.map((spot, index) =><Card key={index} 
  
  title = {spot.title}
  location = {spot.location}
  mapsLink = {spot.mapsLink}
  start = {spot.start}
  end = {spot.end}
  description = {spot.description}
  imgUrl = {spot.imgUrl}
  spot = {spot}
  />)
  console.log(travelComponents)
  return(
    <div className="App">
      <Navbar />
      {travelComponents} 
    </div>
  )
}

export default App
