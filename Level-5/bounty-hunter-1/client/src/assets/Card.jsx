import React, {useState} from "react"


export default function Card(props){
  const {firstName, lastName, isLiving, bountyAmount, species, status, img, _id, deleteBounty, editBounty} = props

  const [updatedBounty, setUpdatedBounty] = useState(props)
  const [editToggle, setEditToggle] = useState(false)

  const theme = () => {
    if(status === "good"){
      return "green"
    }else if(status === "evil"){
      return "red"
    }
  }

const themeCover = () => {
  if(isLiving === true){
    return "themeCover"
  }else if (isLiving === false){
    return ""
  }
}

const onSubmit = (e) => {
  e.preventDefault()
  editBounty(updatedBounty, id)
  setEditToggle(false)
}

function handleChange(e){
  const {name, value, type, checked} = e.target
  type === "checkbox" ? setUpdatedBounty(prevInput => ({...prevInput, [name]: checked})) : setUpdatedBounty(prevInput => ({...prevInput, [name]: value }))

}

return (
  console.log(img),
  <div>
  
  {editToggle ? 
  
    <div>
    <div className={`card theme-${theme()}`}>
      <div className="card-header">
        <div>
          <input name = 'isLiving' 
          type = "checkbox"
          className = "isLivingCheckBox" 
          checked = {updatedBounty.isLiving}
          onChange = {handleChange} ></input>
          <label htmlFor="Alive?">Alive?</label>
        </div>
        <h1>{bountyAmount}</h1>
      </div>
      <div className="image-container">
        <img src = {img} alt = {firstName + lastName}/>
        <div className={themeCover()}></div>
      </div>
      <div className="name-container">
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
      </div>
        <h2 className="species-container">{species}</h2>
        <div className="button-container">
          <button className="edit" onClick = {() => setEditToggle(!editToggle)}>Edit</button>
          <button className="delete" onClick={() => deleteBounty(_id)}>Delete</button>
        </div>
        </div>
        </div>
    : 
    <div>
      <form className="card" onSubmit={onSubmit}>
        <div className="card-header">
          <input name = "isLiving"
          type= "checkbox"
          className="isLivingCheck"
          checked = {updatedBounty.isLiving}
          onChange = {handleChange} / >
          </div>
          <div>
          <input name = "bountyAmount" 
            placeholder="Bounty Amount"
            className="bountyAmount"
            type = "number"
            value = {updatedBounty.bountyAmount}
            min = {0}
            onChange = {handleChange}
          / >
          <div className="image-container">
            <img src = {img} alt={`${firstName} ${lastName}`} />
          </div>
          <input 
            name = "img"
            placeholder="image-URL"
            value={updatedBounty.img}
            onChange = {handleChange}
          />
          <input 
            name = "firstName"
            placeholder="First Name"
            value={updatedBounty.firstName}
            onChange = {handleChange}
          />
          <input 
            name ="lastName"
            placeholder="Last Name"
            value = {updatedBounty.lastName}
            onChange = {handleChange}
          />
          <select name = "status" value = {updatedBounty.status} onChange = {handleChange}>
          <option value = "good">Good</option>        
          <option value = "evil">Evil</option>
          
          </select>
          <button className="edit">Save</button>
        </div>
      </form>
  
    
    </div>}
    </div>
    )
  }
