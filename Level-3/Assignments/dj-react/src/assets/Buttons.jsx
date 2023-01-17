import React from "react"

export default function Buttons(props){
  return(
    <div className="button-container">
    <button className="dj-small" onClick={props.smallDJ}>
      DJ Small
    </button>
    <button className="party-dj" onClick={props.partyDJ}>
      Party DJ
    </button>
    <button className="left-dj" onClick={props.leftDJ}>
      Left DJ
    </button>
    <button className="right-dj" onClick={props.rightDJ}>
      Right Blue
    </button>
    <button className="bigDJOne" onClick={props.bigDJOne}>
      Big DJ One
    </button>
    <button className="bigDJTwo" onClick={props.bigDJTwo}>
      Big DJ Two
    </button>
    <button className="bigDJThree" onClick={props.bigDJThree}>
      Big DJ Three
    </button>
    <button className="bigDJFour" onClick={props.bigDJFour}>
      Big DJ Four
    </button>
    <button onClick={props.makeSound}>Noise Toggle</button>
  </div>
  )
};