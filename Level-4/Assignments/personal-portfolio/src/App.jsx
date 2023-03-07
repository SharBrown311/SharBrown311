import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css'

function App() {
  
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Resume />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
    )
}

export default App
