import React from 'react'
import "./css/Explanation.css"
import "../../App.css"


function Explanation() {
  return (
    <div className = "Explanation">
    <div className='explanation-container'>
    <hr className='spacer'/>
    <div className='section-1 container'>
        <div className='container-image-1'>
          </div>
        <h4 className='section-1-text'>Add New Decks for your flashcards,
        <br /> and categorize them how you see fit!</h4>
         
        </div>
        <hr className='spacer'/>
        <div className='section-2 container'>
        <div className='container-image-2'>
  
        </div>
        <h4 className='section-2-text'>Contains Easily traversible pages,
        <br />
        to make your study session more
        <br />
        about the goal and less about the journey.
       
      </h4>
         
        </div>
        <hr className='spacer'/>
        <div className='section-3 container'>
        <div className='container-image-3 '> </div>
        <h4 className='section-3-text'>Time yourself in the Quiz Section, using our Count Up and Count Down timers 
        <br />
          
        </h4>
         
        </div>
        <hr className='spacer'/>
          <div>
        
        </div>
    </div>
    </div>
  )
}

export default Explanation
