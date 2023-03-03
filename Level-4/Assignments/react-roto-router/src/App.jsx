import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App(){
  return(
    <div className='App'>
    <nav className='nav-links'>
      <Link to = "/">Home</Link>
      <Link to = "/About">About</Link>
      <Link to = "/Services">Services</Link>
      <Link to = "/Contact">Contact</Link>
    </nav>
    <Routes>
      <Route index path = "/" element = {<Home />}/>
      <Route path = "/About" element = {<About />}/>
      <Route path = "/Services" element = {<Services />}/>
      <Route path = "/Contact" element = {<Contact />} />
      </Routes>
    </div>
  )
}