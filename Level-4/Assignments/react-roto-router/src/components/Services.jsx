import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Services() { //step 2
  const navigate = useNavigate()//Nav step 1
 return ( //step 3
    <main className='service-page' style={{ padding: 20 }}> 
      <h1>Services Offered</h1>  
        <div className='services-container'>
          <aside>
            <div className='services-list-container'><h3>Installation</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adispiscivcing elit.</p></div>
          </aside>
          <aside>
          <div className='services-list-container'><h3>Repairs & Pricing</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adispiscivcing elit.</p></div>
        </aside>
        </div>  

        <button onClick = {() => navigate("/")}>Return to Home</button>
        <button onClick={() => navigate("/about")}>Go to About Page</button>
    </main>
  )
}