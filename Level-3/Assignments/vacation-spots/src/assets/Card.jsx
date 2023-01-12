import React from 'react'


function Card(props){
  let cardColor
    //changes the color of the card based on the seasons
    if(props.spot.timeToGo === "Spring"){
      cardColor = '#FCF9D9'
    }else if(props.spot.timeToGo === 'Summer'){
      cardColor = "#D394B6"
    }else if(props.spot.timeToGo === 'Winter'){
      cardColor = '#7492B9'
    }else if(props.spot.timeToGo === 'Fall'){
      cardColor = '#687A0E'
    }

    let dollar 
    //Changes dollar signs based on price
    if(props.spot.price <= 500){
      dollar = '$'
    }else if(props.spot.price > 500 && props.spot.price <= 1000){
      dollar = '$$'
    }else if(props.spot.price > 1000){
      dollar = '$$$'
    }

    return(
      <div className = 'card'>
      <div className = 'cardBackgroundColor' style={{backgroundColor: cardColor, opacity: 0.8, borderWidth: 32, borderStyle: 'solid', borderRadius: '20%' }}>
      <img src= {props.spot.imgSrc} alt= {props.spot.place}/>
      </div>
      <div className="card-text">
          <h3>{props.spot.place} ({props.spot.price})</h3>
          <div className='price'>Price: {dollar}
          {props.spot.price}</div>
          <div className='statement'>Best the best time of year to visit {props.spot.name} is in {props.spot.timeToGo}!</div>
      </div>
      </div>
    )
}

export default Card