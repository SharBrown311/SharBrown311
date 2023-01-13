import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import './App.css'

export default function App() {




  return (
    <div className="App">
<Header />
      <Meme />
    </div>
  )
}

// function handleClick(){
//   console.log('i was clicked')
// }
// function handleOnMouseOver(){
//   console.log('mouseover')
//<img 
// src = "https://picsum.photos/640/360" 
// onMouseOver={handleOnMouseOver} />
//   <button onClick={handleClick}>Click me</button>
// }