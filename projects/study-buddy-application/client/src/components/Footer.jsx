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
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">How to Take Effective Notes</a></li>
              <li><a href="#">Study Advice</a></li>
              <li><a href="#">Study Advice</a></li>
              <li><a href="#">Study Advice</a></li>
              <li><a href="#">Study Advice</a></li>
              <li><a href="#">Study Advice</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Study Buddy</h4>
            <div className="logo">
              <div className='study-buddy-logo'></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="copyright-text">
            <p>Copyright © 2023
              <br />Developed & Designed By: <ul>
                  <li><a href = "#">Conrad Rhoades</a></li>
                  <li><a href = "#">Kyle Shutt</a></li>
                  <li><a href = "#">Sharon Brown</a></li>
                </ul><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
