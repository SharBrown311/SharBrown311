import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/Home/Home'
import AddDeck from "./assets/AddDeck/AddDeck"
import Decks from './assets/Decks/Decks'
function App() {

  return(
    <div>
    <Routes className = "routes">
      <Route index path = "/" element = {<Home />} />
      <Route path = "/create" element = {<AddDeck/>} />
      <Route path = "/study" element = {<Decks />} />
    </Routes>
    </div>
  )
}




export default App
