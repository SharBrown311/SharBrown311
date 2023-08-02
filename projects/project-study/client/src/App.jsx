import React, {useContext} from 'react'
import Navbar from './assets/Navbar'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Protected from './assets/Protected'
import Home from './assets/Home'
import Dashboard from './assets/Dashboard'
import { UserContext } from './assets/UserProvider'
import Banner from './assets/Page-Components/HomePage-Components/Banner'
import Auth from './assets/Auth'
import './App.css'
import Footer from './assets/Page-Components/Footer'

export default function App(){
  const {token, logout} = useContext(UserContext)
  return(
    <div className='App'>
      {token && <Navbar logout = {logout} />}
      <Banner />
      <Routes>
      <Route exact path = "/" element = {token ? <Home /> : <Auth/>} />
      <Route path = "/dashboard" element = {
      <Protected token = {token}><Dashboard /> </Protected>
      } />
      </Routes>
      <Footer />
    </div>
  )
}