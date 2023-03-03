
import React from "react"


function RarityStars({ rarity}){
    function stars(){
      if(rarity === "Common"){
        return <div className="star-div">
        <i className="fas fa-star"></i></div>
      }else if (rarity === 'Uncommon'){
        return <div className="star-div">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
      }else if(rarity === 'Rare'){
        return <div className="star-div">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
       </div>
      }else if (rarity === 'Ultra-rare'){
        return <div className="star-div">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
       </div>
      }else{
      return stars()
      }
    }
    
    return(
    <div>
      {stars()}
          </div>
  )

  }
export default RarityStars




//Common (★), Uncommon (★★★), Rare (★★★★) and Ultra-rare (★★★★★)