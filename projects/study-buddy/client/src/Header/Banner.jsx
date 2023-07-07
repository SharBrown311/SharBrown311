import React from 'react'
import Auth from '../assets/Auth'

function Banner() {
  return (
    <div className='Banner'>
      <div id = 'modal'className='popupContainer' style={{display:"none"}}>
        <div className='popupHeader'><span className='header_title'>
        Login</span>
          <span className='modal_close'>
            <i className='fa fa-times'></i>
            </span>
        </div>
        <section className='popupBody'>
          <Auth />
        </section>
      </div>
      <div className = 'main-banner wow fadeIn animated' id = 'top' data-wow-duration = "1s" data-wow-delay = "0.5s" style={{
        visibility: "visible", animationDuration: '1s', animationDelay: '0.5s'
      }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6 align-self-center'>
                  <div className='left-content show-up header-text wow fadeInLeft animated'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <h2>Heading</h2>
                        <p>Subheader</p>
                      </div>
                      <div className='col-lg-12'>
                        <div className='white-button first-button scroll-to-section'><a href = "#">
                          </a>
                          </div>
                          <div className='white-button scroll-to-section'>
                            <a href='#'></a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='right-image wow fadeInRight animated'>
                    
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
