import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='loader_bg' >
      <div className='loader'>

      </div>
    <div className='header-area header-sticky wow slideInDown animated'>
      <div className='left'></div>
      <div className='right'></div>
      <div className='container'>
        <div className='row d_flex'>
          <div className='col-sm-3 logo_sm'>
            <div className='logo'></div>
            </div> 

        </div>
        <div className='col-lg-10 offset-lg-1 col-md-12 col-sm-9'>
          <div className='navbar-area'>
            <nav className='site-navbar'>
              <ul>
                <li>Home</li>
                <li>Create</li>
                <li>Logout</li>
              </ul>
              <button class="nav-toggler" fdprocessedid="6kgxnl">
                           <span></span>
                           </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Header
