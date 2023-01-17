import React from "react";
import Square from "./assets/Square";
import "./App.css";
import Header from "./assets/Header";
import Buttons from "./assets/Buttons";
import Growl from "./sounds/stomachgrowl.mp3"
import Zombie from "./sounds/zombie.mp3"
import ToySquek from "./sounds/toysquek.mp3"
import Wii from "./sounds/wii.mp3"
import NoiseMaker from "./sounds/noisemaker.mp3"
import Sponge from "./sounds/spongebob.mp3"
import Scream from "./sounds/scream.mp3"
import Xbox from "./sounds/xbox.mp3"
import Mario from "./sounds/mario.mp3"

function App() {
  const [color, setColor] = React.useState([
    "white",
    "white",
    "white",
    "white",
  ]);

  function smallDJ() {
    new Audio(Growl).play()
    if (color[0] !== "white") {
      setColor(["white", "white", "white", "white"]);
    } else {
      setColor(["black", "black", "black", "black"]);
    }
  }

  function partyDJ() {
    new Audio(Zombie).play()
    setColor(["purple", "purple", color, color])
  }

  // -----------------------------------------------------------

  function leftDJ() {
    new Audio(ToySquek).play()
    setColor([color, "blue", color, color]);
  }
  function rightDJ() {
    new Audio(Xbox).play()
    setColor([color, color, color, "blue"]);
  }

  // ---------------------------------------------------------

  function bigDJOne() {
    new Audio(Wii).play()
    setColor(["darkgoldenrod", color, color, color]);
  }
  function bigDJTwo() {
    new Audio(NoiseMaker).play()
    setColor([color, "orange", color, color]);
  }

  function bigDJThree() {
    new Audio(Sponge).play()
    setColor([color, color, "magenta", color]);
  }
  function bigDJFour() {
    new Audio(Scream).play()
    setColor([color, color, color, "red"]);
  }

  function makeSound() {
    new Audio(Mario).play()
   
  }


 return (
        <div>
          <Header />
          <Square 
            style0={{backgroundColor: color[0]}} 
            style1 = {{backgroundColor:color[1]}}
            style2={{backgroundColor: color[2]}}
            style3 = {{backgroundColor: color[3]}}
          />
            <Buttons 
              smallDJ = {smallDJ}
              partyDJ = {partyDJ}
              leftDJ = {leftDJ}
              rightDJ = {rightDJ}
              bigDJOne = {bigDJOne}
              bigDJTwo = {bigDJTwo}
              bigDJThree = {bigDJThree}
              bigDJFour = {bigDJFour}
              makeSound = {makeSound}
            />
          </div>
      );
    }

export default App;
