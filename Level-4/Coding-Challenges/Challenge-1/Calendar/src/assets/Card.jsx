import React, {useState, useEffect} from 'react'

export default function Card(props) {
  console.log('props', props)
  const {item: {firstName, lastName}} = props
  const [color, setColor] = useState("")
  // useEffect(()=> {
  //   fetch("https://www.colr.org/json/color/random?timestamp=" `${new Date().getTime()}`)
  //     .then(res => res.json())
  //     .then(res => setColor(res.colors[0].hex))
  //     .catch(err => console.log(err))
  // }, [])
  // console.log(color)
  return (
    <div>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
    </div>
  )
}
