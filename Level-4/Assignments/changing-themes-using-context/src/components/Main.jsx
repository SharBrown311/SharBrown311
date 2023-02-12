import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


export default function Main(props) {
  console.log('props:' , props)
  const {color, image , toggleTheme} = useContext(ThemeContext)
  return(
    <div className={`${color}-theme`} id = 'main--div' >
    <div className={`${color}-theme`} id='image--section'>
      <img src= {`${image}`} />
        </div>
      <button onClick = {toggleTheme} className = {`${color}-theme`} id = 'theme-button'>Theme Change Button</button>
      <h3 className={`${color}-theme`}id = 'theme-text'>Oh my god, its {color} mode!!</h3>
    </div>
  )
}


///Content === Main section