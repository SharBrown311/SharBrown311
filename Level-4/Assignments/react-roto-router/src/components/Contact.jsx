import React from "react";
import { useNavigate } from "react-router-dom";


function Contact(){
  const navigate = useNavigate()
  return(
  <main className="contact-container">
    <h1>Contact</h1>
    <section className="contact-container">
      <form>
        <input type = 'text' placeholder="Full Name" />
        <input type = 'text' placeholder="Phone Number" />
        <input type = 'email' placeholder="Email" />
        <textarea placeholder="More Information & Questions"></textarea>
      </form>
    </section>
    <button onClick = {() => navigate('/')}>Return to Home Page</button>
    <button onClick={() => navigate('/About')}>About Us</button>
    <button onClick = {() => navigate('/Services')}>Available Services</button>
  </main>
  )
}
export default Contact