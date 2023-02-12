import React from 'react'

import Header from './assets/Header'

export default function App() {
  return (
    <div>
    <Header />
    </div>
  )
}






















// import { useState } from 'react'
// import {Component} from 'react'

// import './App.css'

// function App() {
//   const [angle, setAngle] = useState("0")
 
  



//       const handleAngleChange = (e) =>{
//         setAngle(
//           e.target.value
//         )
//       }


//   class Square{
//     constructor(angle){
//       this.angle = angle
//       return(
//         <div className='square-and-input-container'>
//         <div className='color-changing-square'
//           style={{background: `linear-gradient(${angle}deg, 
//             ${colorOne}, ${colorTwo}), ${colorThree}`, 
//             border: "1px solid black", 
//             height: '338px', 
//             width: "338px"}}></div>
//           </div>
//       )
//   }
// }

  
  
//   const ColorSetting = () =>{
//     const [colorOne, setColorOne] = useState("#0000000")
//     const [colorTwo, setColorTwo] = useState("#0000000")
//     const [colorThree, setColorThree] = useState("#000000")
    
    
//     const handleFirstColor = (e) =>{
//       setColorOne({value: e.target.value})
    
    
//       const handleSecondColor = (e) =>{
//       setColorTwo({value: e.target.value})
    
//     }
//     const handleThirdColor = (e) =>{
//       setColorThree({value: e.target.value})
//     }
//       return(
//         <div>
//         <div className='input-container'>
//         <input className='color1' 
//         onChange={handleFirstColor}
//         value = {colorOne}
//         />
//         <input className='color2'
//           onChange={handleSecondColor}
//           value = {colorTwo}
//         />  
//         <input className='color3'
//         onChange={handleThirdColor}
//         value = {colorThree}
//       /> 
//       <div className = "angle-input-container">
//       <input className='angle'
//       onChange = {handleAngleChange}
//       value = {angle} />
//       </div>
//       </div> 
//       </div>
//       )
//     }
 

  
  
//     return (
//     <div className="App">
//     <div>
//       <Square />
//       <ColorSetting />
//     </div>
//     </div>
//   )
// }
// }

// export default App
