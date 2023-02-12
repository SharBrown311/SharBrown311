import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'



export default function Footer() {
  const {color} = useContext(ThemeContext)
  return (
    <div className={`${color}-theme`} id = "footer">
      <h5>SBSharonBrown311@gmail.com</h5>
    </div>
  )
}
