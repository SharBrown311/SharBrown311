import {useState} from 'react'
import FileInput from './FileInputContext'


export default function Form() {
    const initState = {
      title: "", 
      description: ""
    }

  
  const [inputs, setInputs] = useState(initState)
  const [data, setData] = useState([])
  
  

    function handleChange(e){
      console.log("inputs: " , inputs)
      setInputs(prevInputs =>{
        return {
          ...prevInputs, 
          [e.target.name]: e.target.value
        }
      })
}

    function handleSubmit(e){
      e.preventDefault()
      setData(prevData => [...prevData, inputs])
      console.log('data:' , data)
    }




    return (
    <div>
    <form onSubmit = {handleSubmit}>
      <FileInput data = {data}/>
      <input 
      type='text'
      name='title'
      placeholder='Title of Image'
      value = {inputs.title}
      onChange={handleChange}
      />
      <input 
      type='text'
      name='description'
      placeholder='Description of Image'
      value = {inputs.description}
      onChange={handleChange}
      />

      <button>Submit</button>
      </form>
    </div>
  )
}



//a url to an image of an ugly thing