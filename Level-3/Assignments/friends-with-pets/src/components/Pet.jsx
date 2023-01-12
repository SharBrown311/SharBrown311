import React from "react";

function Pet(props){
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return(
    <div className="pet-container">
    <hr></hr>
    <p className="pet-name">Name: {capitalizeFirst(props.name)}</p>
    <p className="pet-breed">Breed: {capitalizeFirst(props.breed)}</p>
    </div>
  )
};
export default Pet