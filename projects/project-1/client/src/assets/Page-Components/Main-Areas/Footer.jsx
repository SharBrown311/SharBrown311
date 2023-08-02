import React from 'react'

function Footer() {
  return (
    <footer id="newsletter" style={{backgroundColor: "blue", color: 'white'}}>
    <div style={{backgroundColor: "blue", color: 'white'}} className="container footer-content">
      <div className="row" style={{backgroundColor: "blue", color: 'white'}}>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <div className='contact-container' style={{backgroundColor: "blue", color: 'white'}}>
            <h4 style={{textDecoration: 'underline'}}>Contact Us</h4>
            <p>Somewhere - USA, 12345-678, Earth </p>
            <p><a href="#" style={{backgroundColor: "blue", color: 'white'}}>010-867-5309</a></p>
            <p><a href="#" style={{backgroundColor: "blue", color: 'white'}}>study_buddy@company.com</a></p>
          </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4 style={{textDecoration: 'underline'}}>Useful Links</h4>
            <p><a href="#" style={{backgroundColor: "blue", color: 'white'}}>How to Take Effective Notes</a></p>
           
          </div>
        </div>
        </div>
        </div>
        <div className="col-lg-12">
          <div className="copyright-text">
          <div className="col-lg-3">
          <div className="footer-widget">
            <div className="logo">
              <div className='study-buddy-logo'></div>
            </div>
          </div>
          <div className='copyright-container'>
           <p style={{color: "#fff"}}>Copyright © 2023<br />
              Developed & Designed By:</p> <ul className='authors-container'>
                  <li style={{color: "#fff"}}>Conrad Rhoades -  </li>
                  <li style={{color: "#fff"}}> &nbsp;Kyle Shutt&nbsp;</li>

                  <li style={{color: "#fff", fontStyle: "italic"}}> - Sharon Brown</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer



