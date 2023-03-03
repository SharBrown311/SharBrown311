import React from 'react' 
import { useNavigate} from 'react-router-dom';

export default function Home() { //Step 2
    const navigate = useNavigate()
  return (//Step 3
      <div style={{ padding: 20 }}> {/*Step 4*/}
          <h1>Pipes & Fittings</h1>{/*Step 5*/}
        { <p>Plumbing services and installations provided by family people for family people.</p> } {/*Step 6*/}
        <button onClick={() => navigate("/Services")}>Available Services</button>
        <button onClick={() => navigate("/About")}>About us</button>
        <button onClick = {() => navigate("/Contact")}>Contact us</button>
      </div> //Step 4
    );// Step 3
  }// Step 2