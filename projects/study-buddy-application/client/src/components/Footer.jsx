import React from 'react'

function Footer() {
  return (
    <footer id="newsletter">
    <div className="container footer-content">
      <div className="row">
        {/* <div className="col-lg-8 offset-lg-2">
        </div>
        <div className="col-lg-6 offset-lg-3">
        </div> */}
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <div className='contact-container'>
            <h4 style={{textDecoration: 'underline'}}>Contact Us</h4>
            <p>Somewhere - USA, 12345-678, Earth </p>
            <p><a href="#">010-867-5309</a></p>
            <p><a href="#">study_buddy@company.com</a></p>
          </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4 style={{textDecoration: 'underline'}}>Useful Links</h4>
            <p><a href="#">How to Take Effective Notes</a></p>
           
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
           <li style={{color: "#fff"}}>Copyright © 2023<li>
              Developed & Designed By:</li> <ul className='authors-container'>
                  <li style={{color: "#fff"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "#">Conrad Rhoades -  </a></li>
                  <li style={{color: "#fff"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "#"> &nbsp;Kyle Shutt&nbsp;  </a></li>
                  <li style={{color: "#fff", fontStyle: "italic"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "#"> - Sharon Brown</a></li>
                </ul>
            </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
