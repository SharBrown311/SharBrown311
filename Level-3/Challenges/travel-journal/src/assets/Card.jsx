import React from "react"

function Card(props) {
  return (
    <div className={props.spot.location} >
    <div className="location-img-container">
        <img className= 'img-url-src' src= {props.spot.imgUrl} alt = {props.spot.title}  />
        </div>
        <div className="top-container">
        <img className = 'map-pointer' src = 'src/images/mappointer.png' alt = 'map-pointer' />
        <h4 className="country-name">{props.spot.location}</h4>
        <a className="link-google" href={props.spot.mapLink}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.spot.title}</h1>
        <br></br>
        <h4 className="start-end-date">{props.spot.start + " - " + props.spot.end}</h4>
        <p className="card--description">{props.spot.description}</p>
    <hr></hr>
    </div>
  )

}

export default Card