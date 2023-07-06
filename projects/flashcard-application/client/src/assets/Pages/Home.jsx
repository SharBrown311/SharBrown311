import React, {useContext} from 'react'
import Explanation from '../Page Components/Explanation'
import { UserContext } from '../context/UserProvider'
import './Pages.css'


function Home() {
  const {user: {username}} = useContext(UserContext)
  return (
    <div className = "Home">
      
      <div className='header-container'>
    <header className='head-container'>
 

    </header>
    </div>
    <div className='header-seperator'/>
    <br />
    <br />

    <main>
    <br/>
    <br/>
    <div>
    <div className='home-about-image'>
    </div>
    {/* <div className='explanation-container container'>
      <Explanation />
      </div> */}
    </div>
    <div className='links-outside-image'>
      <div className = 'study-habits-title container'>
        <h4 className='study-habits-text'>Need Some Extra Help <br/>Perfecting Your Study Habits?</h4>
      </div>
        <div className='list-container container '>
          <ul className='list'>
          <br />
              <li className='listItem'><a href='https://psychcentral.com/health/highly-effective-study-habits'>PsychCentral.com</a></li>
              <li className='listItem'><a href='https://pennstatelearning.psu.edu/study-habits'>Penn State Learning</a></li>
              <li className='listItem'><a href='https://www.oxfordlearning.com/how-to-study-effectively/'>Oxford Learning</a></li>
              <li className='listItem'><a href='https://www.thoughtco.com/great-study-habits-1857550'>ThoughtCo.</a></li>
              <li className='listItem'><a href='https://www.usa.edu/blog/study-techniques/'>University of St. Augustine for Health Sciences</a></li>
              <li className='listItem'><a href='https://thecollegepost.com/online-study-tools/'>The College Post</a></li>
          
          </ul>
      
        </div>
        </div>
      </main>
      </div>
  )
}

export default Home