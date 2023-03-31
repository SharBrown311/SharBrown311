import React from 'react'
import {useState} from 'react'
import "./Card.css"


function Card(props) {
  const {firstName, lastName, isLiving, bountyAmount, species, Img, deleteBounty, editBounty} = props
  const [updatedBounty, setUpdatedBounty] = useState(props)
  const [editToggle, setEditToggle] = useState(false)

  const theme = () => {
    if(isLiving === true){
      return "blue"
    }else if(isLiving === false){
      return "red"
    }

  }
  // const goodOrBad = () =>{
  //   if()
  // }
  const onSubmit = (e) => {
    e.preventDefault()
    editBounty(updatedBounty, _id)
    setEditToggle(false)
  }
  function handleChange(e){
    const {name, value, type, checked} = e.target
    type === "checkbox" ? setUpdatedBounty(prevInput => ({...prevInput, [name]: checked})) : setUpdatedBounty(prevInput => ({ ...prevInput, [name]: value }))
  }
  return (
    console.log(Img),
    <>
      {!editToggle ?
        <>
          <div className={`card theme-${theme()}`} >
            <div className="cardHeader">
              <div>
                <input
                  name="isDead"
                  type="checkbox"
                  className="isDeadCheck"
                  id="Dead"
                  checked={updatedBounty.isDead}
                  onChange={handleChange}
                  disabled
                ></input>
                <label
                  htmlFor="Dead">HIT
                </label>
              </div>
              <h1>{Bounty_Amount}</h1>
            </div>
            <div className="ImgContainer">
              <img
                src={Img}
                // FILLS IMAGE IF LINK ERROR
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "https://live.staticflickr.com/5604/15364471327_12e86bf4c3_z.jpg"
                }}
                alt={firstName} />
              <div className={cover()}></div>
            </div>
            <div className="nameContainer">
              <h1>{firstName}</h1>
              <h1>{lastName}</h1>
            </div>
            <h2 className="type">{Type}</h2>
            <div className="buttonContainer">
              <button className="edit" onClick={() => setEditToggle(!editToggle)
              }>Edit</button>
              <button className="delete" onClick={() => deleteBounty(_id)}>Delete</button>
            </div>
          </div>
        </>
        :
        <>
          <form
            className="card"
            onSubmit={onSubmit}
          >
            <div className="cardHeader">
              <div>
                <input
                  name="isDead"
                  type="checkbox"
                  className="isDeadCheck"
                  id="Dead"
                  checked={updatedBounty.isDead}
                  onChange={handleChange}
                ></input>
                <label
                  htmlFor="Dead">HIT</label>
              </div>
              <input
                name="bountyAmount"
                placeholder="Bounty"
                className="bountyAmount"
                type="number"
                value={updatedBounty.bountyAmount}
                min={0}
                onChange={handleChange}
              ></input>
            </div>
            <div className="ImgContainer">
              <img src={Img} alt={`${First_Name} ${Last_Name}`} />
            </div>
            <input
              name="Img"
              placeholder="Image Url"
              value={updatedBounty.Img}
              onChange={handleChange}
            >
            </input>
            <input
              name="firstName"
              placeholder="First Name"
              value={updatedBounty.firstName}
              onChange={handleChange}
            ></input>
            <input
              name="lastName"
              placeholder="Last Name"
              value={updatedBounty.lastName}
              onChange={handleChange}
            ></input>
            <select
              name="Type"
              value={updatedBounty.Type}
              onChange={handleChange}
            >
              <option
                value="true"
              >Alive</option>
              <option
                value= "false"
              >Dead</option>
            </select>
            <button className="edit"
            >Save</button>
          </form>
        </>}
    </>
  )
}

export default Card
