import React from 'react'
import Card from './Card'

export default function CardList(props) {
  const {data} = props
  console.log('data in cardList', data)
  const names = (
    data?.map((item, index) => {
      return <Card item={item} key={index} />
    })
  )
  return (
    <div>
    {data.map((item, index) => {
      return <Card item={item} key={index}/>
    })}
    </div>
  )
}
