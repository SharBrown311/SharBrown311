import React, {useContext} from 'react'
import UserReview from '../Page-Components/UserReview'
import Explanation from '../Page-Components/Explanation'
import "./css/Home.css"
import "../../App.css"
import { UserContext } from '../../context/UserProvider'


function Home() {
  const {user: {username}} = useContext(UserContext)
  return (
    <div className = "Home">
    <header className='head-container'>
 
    
    </header>
    <br />
    <br />
    <h3>Welcome {username.toUpperCase()}!</h3>
    <main>
    <br/>
    <br/>
    <div className='container'>
    <h1 className='home-header'>About Study Buddy</h1>

    <p className='about-us-text '>Welcome to our self-study and self-quizzing website - the ultimate destination for lifelong learners! 
    Are you someone who is passionate about acquiring new knowledge and developing new skills? Do you find yourself constantly seeking 
    opportunities to challenge your mind and expand your horizons? Look no further! Our website offers a unique and innovative approach 
    to self-learning and self-assessment, providing you with the tools and resources you need to take your education into your own hands. 
    With our interactive quizzes and comprehensive study guides, you can explore new subjects at your own pace and test your knowledge 
    to see just how far you've come. Join our community of curious learners today and discover the joy of self-directed education!</p>
    <br />
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
        <div className='explanation-container container'>
      <Explanation />
      </div>
      </main>
    <div className='test container'>
   
      <UserReview />
    </div>
      </div>
  )
}

export default Home

