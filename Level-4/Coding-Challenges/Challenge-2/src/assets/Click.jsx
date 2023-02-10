import React from "react";


export default function Square(){

  const [color, setColor] = useState(['brown', 'red', 'blue'])

function handleClick(){
  
}



  return(
    <>
    <h1 style = {{border: '1px solid black', backgroundColor: 'yellow'}}>Hello World</h1>
    <button onClick= {handleClick}>Click</button>
    </>
 
  )
}