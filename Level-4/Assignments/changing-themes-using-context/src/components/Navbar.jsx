import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'




export default function Navbar(props) {
  console.log("props:" , props)
  const {color}  = useContext(ThemeContext);
    return(
      <nav className= {`${color}-theme`} id = 'navbar'>
      <div className='menu--container'>
       
        <h3 className='menu'>Home</h3>
     
        <h3 className='about'>About</h3>
        
        <h3 className='contact'>Contact</h3>
        </div>
      </nav>
    )
}