import React from 'react'
import './Pages.css'



function Home() {
  return (
    <div className='Home'>
      <div className='full_bg'>
          <div className='section'>
            <div id = 'banner1' className='carousel slide slider_main'>
              <ol className='carousel-indicators'>
                <li data-target = '#banner1' data-slide-to = "0" className='indicator-li-1'>01</li>
                <li data-target = "#banner1" data-slide-to = "1" className>02</li>
                <li data-target = '#banner1' data-slide-to = "2" className = 'active'>03</li>
              </ol>
              <div className='caarousel-inner'>
                <div className='carousel-item-active'>
                  <div className='carousel-caption cuplle'>
                    <div className='container'>
                      <div className='col-md-8'>
                        <div className='photog'>
                          <h1>Study Budy
                            <br />
                            Mastering the Learning Process
                          </h1>
                          <a className='read_more'>Read More</a>
                          <a className='read_more'>About Us</a>
                        </div>
                      </div>
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

export default Home