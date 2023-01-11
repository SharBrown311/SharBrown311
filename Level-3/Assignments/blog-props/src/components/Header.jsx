import React from 'react'
import Navbar from './Navbar'

export default function Header(){
return (
  <header>
    <Navbar />
    <div className='main-background'>
    <h1 className='header-title'><strong>Clean Blog</strong></h1>
    <p className='header-p'>A Blog Theme By Start Bootstrap</p>
    </div>
    </header>

)
};