import React from 'react'

function Footer() {
  return (
    <footer id="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
        </div>
        <div className="col-lg-6 offset-lg-3">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Contact Us</h4>
            <p>Somewhere - USA, 12345-678, Earth </p>
            <p><a href="#">010-020-0340</a></p>
            <p><a href="#">info@company.com</a></p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">How to Take Effective Notes</a></li>
            </ul>
          </div>
        </div>

        </div>
        <div className="col-lg-12">
          <div className="copyright-text">
          <div className="col-lg-3">
          <div className="footer-widget">
          <h4>Study Buddy</h4>
            <div className="logo">
              <div className='study-buddy-logo'></div>
            </div>
          </div>
           <li style={{color: "#fff"}}>Copyright © 2023
              <br />Developed & Designed By: <ul>
                  <li style={{color: "#fff"}}><a style={{color: "#fff"}} href = "#">Conrad Rhoades</a></li>
                  <li style={{color: "#fff"}}><a style={{color: "#fff"}} href = "#">Kyle Shutt</a></li>
                  <li style={{color: "#fff"}}><a style={{color: "#fff"}} href = "#">Sharon Brown</a></li>
                </ul><br />
            </li>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
