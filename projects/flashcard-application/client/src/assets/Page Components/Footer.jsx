import React from "react";
import "../../App.css"
function Footer() {
  return (
    <footer className = "Footer">
      <hr />
    <div className="footer-contributions">
    <h5>Built and Designed By: <span className="conrad"><a className = 'author-link'  href = "github.com">Conrad Rhoades</a></span>, 
    <span className="kyle">
    <a className = 'author-link' href = "github.com">  Kyle Shutt </a></span>, 
    & <span className="sharon"><a className = 'author-link'  href = "github.com"> Sharon Brown </a> </span>
    <br/>
    @
    2023</h5>
    </div>
    <div className = "logo-image-container">
    </div>
              <div className="footer-links">
  <div className='footer-links-left'>
    <div className="bar"></div>  
  <hr />
    <button className="footer-button" disabled  href= "#">Terms of Use</button>
    <button className="footer-button" disabled  href= "#">Contact</button>
    <button className="footer-button" disabled  href= "#">Privacy Policy</button>
    
  
    </div>
    <div className="footer-links-right">
    <div className="bar"></div>
    <hr />
    <button className="footer-button" disabled  href= "#">Careers</button>
    <button className="footer-button" disabled href = "#">Support</button>
    <button className="footer-button" disabled href = "#">Guidelines</button>
    </div>
    </div>
    </footer>
  )
}

export default Footer
