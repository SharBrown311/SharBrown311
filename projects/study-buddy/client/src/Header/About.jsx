import React from 'react'
import './Header.css'
import '../App.css'
function About() {
  return (
<div id="about" className="About about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="section-heading">
            <h4 className='about-text'>About <em>What We Do</em> &amp; Who We Are</h4>
            <div className='double-line'></div>
            <p>Study Buddy was developed to build a one stop application for users who need a place to study and store all their study materials. Because organization is key!</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Timing Capabilities</a></h4>
                <p>See how fast you can get through your study sesh or give yourself a time limit. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Store Notes</a></h4>
                <p>What better place to have all of your notes than with your flashcards.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Customization</a></h4>
                <p>Design your flashcards to your own specifications.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Quiz Yourself</a></h4>
                <p>Grade yourself and practice to perfection.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <p>Study and win with our one-of-a-kind application</p>
              <div className="gradient-button">
                <a href="#">Start Creating Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-image">
            <img src="assets/images/about-right-dec.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
