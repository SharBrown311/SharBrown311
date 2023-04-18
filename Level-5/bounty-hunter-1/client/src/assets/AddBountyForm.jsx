import React, {useState} from "react";

function AddBountyForm(props){
  const initInputs = {firstName: "", lastName: "", isLiving: false, bountyAmount: 0, status: "", species: "", img: ""}

  const [newBounty, setNewBounty] = useState(initInputs)

  const {firstName, lastName, isLiving, bountyAmount, status, species, img, addBounty} = props

function handleChange(e){
  const {name, value, type, checked} = e.target
  type === "checkbox" ? setNewBounty(prevInput => ({...prevInput, [name]: checked })) : setNewBounty(prevInput => ({...prevInput, [name]: value}))
}

function onSubmit(e){
  e.preventDefault()
  addBounty(newBounty)
  setNewBounty(initInputs)
}

return (
  <>
    <form className="newForm card"
      onSubmit = {onSubmit}
    >
    <div className="card-header">
    
      <input name = "isLiving"
      checked = {newBounty.isLiving}
      type  = "checkbox"
      className="isLivingCheck"
      onChange = {handleChange}
      />

      <input name = "bountyAmount"
      value={newBounty.bountyAmount}
      className="bountyAmount"
      type = "number"
      placeholder = "Bounty"
      min = {0}
      onChange={handleChange}
      />
    </div>
    <div className="image-container">
      <img src = {newBounty.img} alt = {`${newBounty.firstName} ${newBounty.lastName}`} />

    </div>
    <input name  = "img"
    value = {newBounty.img}
    onChange = {handleChange}
    placeholder = "image URL"
    />
    <input name = "firstName"
    value = {newBounty.firstName}
    onChange = {handleChange}
    placeholder = "First Name"
    />
    <input 
      name = "lastName"
      value = {newBounty.lastName}
      onChange = {handleChange}
      placeholder="Last Name"
    />
    <input name = "species"
     value = {newBounty.species}
     onChange = {handleChange}
     placeholder="Species"
     />
    <select name = "status" value = {newBounty.status} onChange = {handleChange} >
      <option value = "good">Good</option>
      <option value = "evil">Evil</option>
    </select>
    <button>Submit</button>
    </form>
  </>
)
}

export default AddBountyForm
