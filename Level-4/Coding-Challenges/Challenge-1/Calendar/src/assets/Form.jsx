import {useState} from 'react'
import CardList from './CardList'


export default function Form() {

  const initState = {
    firstName: "",
    lastName: ""
  }
const [inputs, setInputs] = useState(initState)

const [data, setData] = useState([])

function handleChange(e){     
  console.log(inputs)  
  setInputs(prevInputs =>{
    return {
      ...prevInputs, 
      [e.target.name]: e.target.value   
    }
  })                   //setter function
}
function handleSubmit(e){
  e.preventDefault()
  setData(prevData => [...prevData, inputs])
  console.log(data)
  setInputs(initState)
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        type = 'text'
        placeholder='First Name'
        name ='firstName'
        value={inputs.firstName} //connects to the state
        onChange = {handleChange}
        />
        <br />
        <input 
        type = 'text'
        placeholder='Last Name'
        name ='lastName'
        value={inputs.lastName} //connects to the state
        onChange = {handleChange}
        />
        <button>Submit</button>
    </form>
    <div>
      <CardList data={data}/>
    </div>
    </div>

  )
}
