import React from 'react'
import Card from "./assets/Card"
import './App.css'

function App(){
  const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring", 
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.DjgCdcbII7wbGF9E2d5B6AHaFW&pid=Api&P=0"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter", 
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.8e44xNYKTXsMucT6VeOBUgHaEo&pid=Api&rs=1&c=1&qlt=95&w=185&h=115"
    },{
      place: "China",    
      price: 1200,
      timeToGo: "Fall", 
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.PDa2gEmpnzjv2lGU0eRzvQHaFj&pid=Api&P=0"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer", 
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.8qDNQWHp27f1hhDoJT6wJAHaEJ&pid=Api&P=0https://tse3.mm.bing.net/th?id=OIP.8qDNQWHp27f1hhDoJT6wJAHaEJ&pid=Api&P=0"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring", 
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.iQ9Q53bzaGWLxECnlXxKxwHaFj&pid=Api&P=0"
   
    }
  ]
  const cards = vacationSpots.map((spot, index) =>{
    return (<Card key = {
 spot.place + " - " + index} spot = {spot} />)
  })
  return(
    <div className='app'>
    {cards}
    </div>
  )
};



export default App