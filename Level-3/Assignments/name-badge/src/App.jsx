import React from "react";
import "./App.css"


export default function App() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    jobTitle: "", 
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    description: "",
  });

  const [badges, setBadges] = React.useState("");
  const [color, setColor] = React.useState("#000");
  const getRgb = () => Math.floor(Math.random() * 256);
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    setBadges((prevBadges) => {
      return [
        ...prevBadges,
        //entire badge container
        <div className="flip-card">
        <div className="flip-card-inner">
        <div className="badges" >
         </div>
         <div className="flip-card-front">
         <div className = 'user-image' style={{borderColor:color}}> </div>
          <p className="name">
            {" "}
            {formData.firstName} {formData.lastName}
          </p>
          <p className="jobTitle">{formData.jobTitle}</p>
          <p className = 'email'> {formData.email}</p>
          <div className="company-logo">
          </div>
          </div>
          <div className="flip-card-back">
          <p className="number"> Phone: {formData.phone}</p>
          
          <p className="birth-place"> Place of birth: {formData.placeOfBirth}</p>
          <p className= 'fav-food'> Favorite food: {formData.favoriteFood}</p>
        
          <div className="comments">Personal Description:  {formData.comments} 
          <div className='barcode'>    <img className = "barcode-img"
          src="https://tse4.mm.bing.net/th?id=OIP.3ZkF5v3SxiZaahy3o_OL0QHaFj&amp;pid=Api&amp;P=0" alt="barcode"/></div>
          </div>
          </div>
          <br></br>
          </div>
        
        </div>,
      ];
    });

    setFormData({
    
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      comments: "",
    });
  }
  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
      <input
      className="input input-firstName"
          minLength={3}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          
        />
        <input
        className="input"
          minLength="3"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          
        />
        <input 
        className="input"
        type='text'
        minLength= {3}
        placeholder = "Job Title"
        onChange = {handleChange}
        value={formData.jobTitle}
        name = 'jobTitle'
        />
        <br></br>
        <input
        className="input"
          minLength={3}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
         
        />
        <input
        className="input"
          minLength="3"
          type="text"
          placeholder="Place of birth"
          onChange={handleChange}
          name="placeOfBirth"
          value={formData.placeOfBirth}
          
        />
        <br></br>
        <input
        className="input"
          minLength="3"
          type="number"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
        
        />
        <input
        className="input"
          minLength="3"
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          name="favoriteFood"
          value={formData.favoriteFood}
   
        />
        <br></br>
        <textarea
        className="input"
          minLength="3"
          placeholder="Tell us about yourself"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
  
        />
        <br></br>
        <button type="submit" className="form--submit" onClick={handleGenerate}>
          Submit
        </button>
      </form>
      <div>
        {badges}
        <br></br>
      </div>
    </div>
  );
}

// import React, {useState} from "react";
// import Badge from './assets/Badge'
// import './App.css'

// export default function App() {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     favoriteFood: "",
//     phone: "",
//     description: ""
//   });
//   const newBadge = []
//   console.log(values)
//   const handleFirstNameInputChange = (e) =>{
//     setValues({...values, firstName: e.target.value})
//   }
//   const handleLastNameInputChange = (e) =>{
//     setValues({...values, lastName: e.target.value})
//   }
//   const handleEmailInputChange = (e) =>{
//     setValues({...values, email: e.target.value})
//   }
// const handlePhoneInputChange = (e) =>{
//   setValues({...values, phone: e.target.value})
// }
// const handleBirthPlaceInputChange = (e) =>{
//   setValues({...values, birthPlace: e.target.value})
// }
// const handleFavFoodInputChange = (e) =>{
//   setValues({...values, favoriteFood: e.target.value})
// }
// const handleDescriptionInputChange = (e) =>{
//   setValues({...values, description: e.target.value})
// }
// const handleSubmit = (e)=>{
//   e.preventDefault()
//   const information = {
//     name: `${this.state.firstName} ${this.state.lastName}`,
//     email: this.state.email,
//     birthPlace: this.state.birthPlace,
//     phone: this.state.phone,
//     favoriteFood: this.state.favoriteFood,
//     description: this.state.description
//   }
//   const badge = [information]
//   this.setState(prevState =>({
//     newBadge:[...prevState.newBadge, badge]
//   }), this.clearInputs())
// }
// const clearInputs = () => {
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       birthPlace: "",
//       phone: "",
//       favFood: "",
//       moreInfo: ""
//     })
//   }
//   return (
//     <div className="form-container">
//       <form className="register-form">
//         <input
//           id="first-name"
//           className="form-field"
//           value={values.firstName}
//           type="text"
//           placeholder="First Name"
//           name="firstName"
//           minLength={3}
//           onChange={handleFirstNameInputChange}
//         />
//         <input
//           id="last-name"
//           value={values.lastName}
//           className="form-field"
//           type="text"
//           placeholder="Last Name"
//           name="lastName"
//           minLength={3}
//           onChange={handleLastNameInputChange}
//         />
//         <input
//           id="email"
//           className="form-field"
//           value={values.email}
//           type="text"
//           placeholder="Email"
//           name="email"
//           onChange={handleEmailInputChange}
//           minLength={3}
//         />
//         <input
//         className = 'form--input'
//         type = 'tel'
//         name = 'phone'
//         value={values.phone}
//         placeholder = "Phone Number"
//         onChange={handlePhoneInputChange}
//                 //TITLE LABELS WARNING SHOWN WHEN PATTERN NOT MET 10 X NUMS 1-9
//         pattern="[0-9]{10}"
//         minLength={3}
//         
//         />
//         <input
//         type= 'text'
//         placeholder="Birth Place"
//         className='form--input'
//         name='birthPlace'
//         value={values.birthPlace}
//         onChange = {handleBirthPlaceInputChange}
//         minLength={3}
//         
//         />
//         <input
//         type='text'
//         className='form--input'
//         name='favoriteFood'
//         placeholder='Favorite Food'
//         value={values.favoriteFood}
//         onChange = {handleFavFoodInputChange}
//         minLength={3}
//                                      />
//         <textarea
//         className='form--description'
//         placeholder='Give a description of yourself'
//                                                   name='description'
//                                                   value={values.description}
//                                                   onChange = {handleDescriptionInputChange}
//                                                   minLength={3}
//                                                   ></textarea>
//         <button className="form-field" type="submit">
//           Submit
//         </button>
//       </form>
//       <div>
//       </div>
//       </div>
//       )
//     };
