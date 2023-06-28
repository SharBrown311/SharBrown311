import React from 'react'
import './Page.css'
function Footer() {
  return (
    <div>
      <footer className='foot'>
      <div className='left-column'>
        <p>© 2023 Sharon Brown</p>
        </div>
        <div className='thank-you-link'>
        <p className='thanks'>-Thank you <a href = "https://acnhapi.com/doc" className='api-link'>ANCH API-</a></p> 
        </div>
        {/* <div className='right-column'>
            <a className = 'github-link'title = 'Github' href = "https://github.com/SharBrown311/VSchool-Assignments"><i className='fab fa-github'></i> Github</a>
            <br />
            <a className = 'linkedIn-link'href = "https://www.linkedin.com/in/sharon-brown-81b267214/" title = "LinkedIn"><i className='fab fa-linkedin'></i> LinkedIn </a>
        </div> */}

      </footer>
    </div>
  )
}

export default Footer

// DONE!