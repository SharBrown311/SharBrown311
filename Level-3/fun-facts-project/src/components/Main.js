import React from 'react'
import background from '/home/sharon/development/assignments/Level-3/fun-facts-project/src/react-icon-large.png'

export default function Main(){
  return <main>
    <h1 className='main--title'>Fun facts about React</h1>
    <div className = 'main--image-large'style = {{backgroundImage: `url(${background})`}}></div>
      <ul className='main--facts'>

        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </main>
}