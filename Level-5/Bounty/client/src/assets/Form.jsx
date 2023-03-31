import { useState } from "react"
import "./Form.css"

function Form(props) {
  const initInputs = {
    firstName: "", 
    lastName: "", 
    isLiving: false, 
    bountyAmount: 0, 
    species: "", 
    Img: "",
  }
  const [newBounty, setNewBounty] = useState(initInputs)
  const {firstName, lastName, isLiving, bountyAmount, species, Img, addBounty} = props


  function handleChange(e){
    const {name, value, type, checked} = e.target
    type === "checkbox" ? setNewBounty(prevInput => ({...prevInput, [name]: checked})) : setNewBounty(prevInput => ({...prevInput, [name]: value}))
  }

    function onSubmit(e){
      e.preventDefault()
      addBounty(newBounty)
      setNewBounty(initInputs)
    }

  return (
    <>
    <form
    className="newForm card"
    onSubmit={onSubmit}
  >
    <div className="cardHeader">
      <div>
        <input
          name="isLiving"
          checked={newBounty.isLiving}
          type="checkbox"
          className="isAliveCheck"
          id="Dead"
          onChange={handleChange}
        ></input>
        <label
          htmlFor="Dead">HIT</label>
      </div>
      <input
        name="bountyAmount"
        value={newBounty.bountyAmount}
        className="bountyAmount"
        type="number"
        placeholder="Bounty"
        min={0}
        onChange={handleChange}
      ></input>
    </div>
    <div className="ImgContainer">
      <img src={Img} alt={`${firstName} ${lastName}`} />
    </div>
    <input
      name="Img"
      value={newBounty.Img}
      onChange={handleChange}
      placeholder="Image Url"
    ></input>
    <input
      name="firstName"
      value={newBounty.firstName}
      placeholder="First Name"
      onChange={handleChange}
    ></input>
    <input
      name="lastName"
      value={newBounty.lastName}
      placeholder="Last Name"
      onChange={handleChange}
    ></input>
    <select
      name="Species"
      value={newBounty.species}
      onChange={handleChange}
    >
      <option
        value="Good"
      >Good</option>
      <option
        value="Evil"
      >Evil</option>
    </select>
    <button>Submit</button>
  </form>
    </>
  )
}

export default Form
