import React from 'react'

function Bounty(props) {
  const {First_Name, Last_Name, Bounty_Amount, species, Img, _id} = props
  return (
    <div>
      <h2>First Name: {First_Name}</h2>
      <h2>Last Name: {Last_Name}</h2>
      <p>Reward: {Bounty_Amount}</p>
      <p>Species: {species}</p>
      <img src = {Img} />
      </div>
  )
}

export default Bounty
