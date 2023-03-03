import React from 'react' 
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate()
  return (
      <div style={{ padding: 20 }}>
        <h2>About View</h2>
        
       { <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
             dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularized in the 1960s with the release of Lestrade sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>}
             <button onClick = {() => navigate("/")}>Return to Home Page</button>
             <button onClick={() => navigate("/Services")}>Go to Services Page</button>
             <button onClick = {() => navigate("/Contact")}>Go to Contact Page</button>
             </div>
    );
  }