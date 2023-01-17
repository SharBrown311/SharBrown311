import React from "react";

function Dice(){
  const number1 = Math.floor(Math.random() * 6)
  const number2 = Math.floor(Math.random() * 6)
  const number3 = Math.floor(Math.random() * 6)
  const number4 = Math.floor(Math.random() * 6)
  const number5 = Math.floor(Math.random() * 6)
  
  const [number, setNumber] = React.useState([1, 2, 3, 4, 5, 6])
    function newNumbers(){
      setNumber([number1, number2, number3, number4, number5])
    }
  return(
    <div className="main-container">
    <h1 className="main-title">React Dice</h1>
      <div className="dice-container">
      <h1 className="title">And your numbers are...</h1>
      <div className="dice-numbers">
      <h2 className='numbers'> {number[0]} </h2>
      <h2 className='numbers'> {number[1]} </h2>
      <h2 className='numbers'> {number[2]} </h2>
      <h2 className='numbers'> {number[3]} </h2>
      <h2 className='numbers'> {number[4]} </h2>
      </div>
</div>
<div className="button-container">
<button className='roll-button' onClick={newNumbers}>Roll the Dice</button>
</div>
    </div>
  )
}

export default Dice