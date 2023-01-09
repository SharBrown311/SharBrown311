import React from "react";

export default function Body(){
  return(
    <div className="body--container">
    <h2>Sharon Brown</h2>
    <h3>FullStack Developer</h3>
    <p className="website">sharonbrown.website</p>
    <button className="btn--email">
    <a href="sbsharonbrown311@gmail.com">
    <i className="fa fa-envelope"></i>Email
    </a>
    </button>
    <p className="about-title"><strong>About</strong></p>
    <p className="about-text">I am a frontend developer with a particular interest in making things visually beautiful and one of a kind. I am always looking for new ways to develop and expand my craft.</p>
    <p className="interests-title"><strong>Interests</strong></p>
    <p className="interests-text">DIY enthusiast. Amateur sketch artist. Education seeker. Avid gaming buff. Overly Organized.</p>
    </div>
  )
}

