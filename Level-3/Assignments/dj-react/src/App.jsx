import React from "react"
import Square from "./assets/Square"
import './App.css'
import Header from "./assets/Header"
import Honk from './sounds/honk.mp3'


class App extends React.Component{
  constructor(){
  super()
  this.state = {
    colors: ["white", 'white', "white", "white"]
  }
  }
   // function djSmall(){
      //You will have one button that will change all four squares either black or white. White if the first one is white. Black if the first square is white.

    // }
  smallDJ = () =>{
    this.honk()
    if(this.state.colors[1] !== "white")
    this.setState({
      colors:["white", 'white', "white", "white"]
    })
    else{
      this.setState({
        colors: ['black', 'black', 'black', 'black']
      })
    }
  }
      // function partyDJ(){
      //Add a second button. The second will turn the top half (both squares) of the grid purple.
  partyDJ= () =>{
    this.honk()
    this.setState(prevState =>{
      return{
        colors: ['purple', 'purple', prevState, prevState]
      }
    })
  }

// -----------------------------------------------------------
  //Left Blue and Right Blue will change the colors of the bottoms squares blue but not individually. One will be linked to the bottom left and the other to the bottom right.
  leftDJ = () =>{
    this.honk()
    this.setState(prevState =>{
      return{
        colors: [prevState, prevState, "blue", prevState]
      }
    })
  }
  rightDJ = () =>{
    this.honk()
    this.setState(prevState =>{
      return{
        colors: [prevState, prevState, prevState, "blue"]
      }
    })
  }
  // ---------------------------------------------------------

      //Each of the Big DJ buttons will be linked to one of the squares and they can have any effect we want.

  bigDJOne = () =>{
    this.honk()
    this.setState(prevState =>{
      return{
        colors: [prevState, 'red', prevState, prevState]
    
    } 
   })
  }
  bigDJTwo = () =>{
    this.honk()
    this.setState(prevState =>{
      return{
        colors: ['cyan', prevState, prevState, prevState]
      }
    })
  }

bigDJThree = () =>{
  this.honk()
  this.setState(prevState =>{
    return{
      colors: [prevState, prevState, 'magenta', prevState]
    }
  })
}
bigDJFour = () =>{
  this.honk()
  this.setState(prevState =>{
    return{
      colors: [prevState, prevState, prevState, 'darkgoldenrod']
    }
  })
}
isSound = false;

honk = () =>{
  new Audio(Honk).play()
  if(this.isSound === true){
    this.isSound = false
  }else if(this.isSound === false){
    this.isSound = true
  }
}

render = () =>{
  const squares = this.state.colors.map((item, index) => {
    <Square key = {index} 
    color = {item} />
    return(
      <div>
      <Header />
      <div className="container">
            {squares}
         <div className='button-container'>
   <button className='dj-small' onClick = {this.smallDJ}>DJ Small</button>
  <button className='party-dj'  onClick = {this.partyDJ}>Party DJ</button>
  <button className='left-dj'  onClick = {this.leftDJ}>Left DJ</button>
   <button className='right-dj'  onClick = {this.rightDJ}>Right Blue</button>
   <button className='bigDJOne'  onClick = {this.bigDJOne}>Big DJ One</button>
   <button className='bigDJTwo'  onClick = {this.bigDJTwo}>Big DJ Two</button>
   <button className='bigDJThree'  onClick = {this.bigDJThree}>Big DJ Three</button>
   <button className='bigDJFour'  onClick = {this.bigDJFour}>Big DJ Four</button>
   <button onClick={this.noise}>Noise Toggle</button>
   </div>
   </div>
   </div>
    )
  })
}
}

export default App