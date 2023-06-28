import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div>
      <header className='head'>
      <div className='left-header-image' />
      <h1 className='header-title'>Animal Crossing New Horizons:<br />Creature Catalog</h1>

        <div className='right-header-image' />
        <ul className='header-nav'>
          <li className='list-item'><NavLink className = 'navLink' to = '/'>
            Home
          </NavLink></li>
          <li className='list-item'><NavLink className = 'navLink' to = "/fish">
            Fish
          </NavLink></li>
          <li className='list-item'><NavLink className = 'navLink' to="/bugs">
            Bugs
          </NavLink></li>
          <li className='list-item'><NavLink className = 'navLink' to = '/seaCreatures'>
            Sea Creatures
          </NavLink></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
