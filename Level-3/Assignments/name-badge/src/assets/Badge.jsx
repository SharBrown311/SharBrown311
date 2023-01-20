import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            image: "", 
            firstName: "",
            lastName: "",
            jobTitle: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
        }
    )
    const [badges, setBadges] = React.useState([])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        console.log(formData)
    } 

    function handleSubmit(event) {
      event.preventDefault() 
      console.log('formData in handleSubmit', formData) 
      console.log(setBadges) 
      setBadges(prevBadges => [...prevBadges, formData])


      console.log(badges)
    }

    const mappedData = badges.map(badge => {
      <div>
        <div>{badges.image}</div>
        <p>First Name : {badges.firstName}</p>
        <p>Last Name: {badges.lastName}</p>
        <p>Job Title: {badges.jobTitle}</p>
        <p>Phone: {badges.phone}</p>
        <p>Place of birth: {badges.placeOfBirth}</p>
        <p>Favorite food: {badges.favoriteFood}</p>
        <p>Email: {badges.email}</p>
        <div className="description"> {badges.description} </div>
        <br></br>
      </div>
    })

    return (
          <div className="form-container">  

            <form className="form" onSubmit={handleSubmit}>
            <input type='file'
            placeholder = 'Image/File upload'
            onChange={handleChange}
            value = {badges.image}
            name = 'image'
            />
            <br></br>
          
            <input 
                minLength={3}
                required
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={badges.firstName}

              />
              <input
                minLength="3"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={badges.lastName}
                required={true}
              />
              <br></br>
              <input 
                minLength={3}
                type  = 'text'
                placeholder="Job Title"
                onChange={handleChange}
                name = 'jobTitle'
                value = {badges.jobTitle}
                required
                />
              <br></br>
              <input 
                minLength="3"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={badges.email}
                required
              />
              <input 
                minLength="3"
                type="text"
                placeholder="Place of birth"
                onChange={handleChange}
                name="placeOfBirth"
                value={badges.placeOfBirth}
                required
              />
              <br></br>
              <input 
                minLength="3"
                type="number"
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
                value={badges.phone}
                required
              />
              <input 
                minLength="3"
                type="text"
                placeholder="Favorite Food"
                onChange={handleChange}
                name="favoriteFood"
                value={badges.favoriteFood}
                required
              />
              <br></br>
              <textarea
                minLength="3"
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="description"
                value={badges.description}
                required
              />
              <br></br>
              <button type="submit" className="form--submit">
                Submit</button>    
            </form>
            <div>{mappedData}</div>
          </div>
    )
}


