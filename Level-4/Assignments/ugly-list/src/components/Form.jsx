import {useState} from 'react'
import UglyList from './UglyList'

function Form(){
 const initState = {
  title: "", 
  description: "", 
  imgUrl: ""
 }
 const [inputs , setInputs] = useState(initState)

 const [data , setData] = useState([])

 function handleChange(e){
  console.log(inputs)
  setInputs(prevInputs => {
    return {
      ...prevInputs, 
      [e.target.name]: e.target.value
    }
  })
 }

 function handleSubmit(e){
  e.preventDefault()
  setData(prevData => [...prevData, inputs])
  console.log(data)
  setInputs(initState)
 }



  return (
    <div>
    <form onSubmit = {handleSubmit}>
    <div className='form-control'>
      <input 
        type = 'text'
        value = {inputs.title}
        placeholder='Title'
        name = 'title'
        onChange={handleChange}
              />

      <input 
        type = 'text'
        value = {inputs.description}
        placeholder = 'Description'
        name = 'description'
        onChange = {handleChange}
      />
      <input 
      type = 'text'
      value = {inputs.imgUrl}
      placeholder = 'Image Url'
      name = 'imgUrl'
      onChange = {handleChange}
    />
    </div>
    <div className='submit-button-container'>  
    <button type = 'submit' className='submit-button'>Submit</button>
    </div>
  
    </form>
    <div>
    <UglyList data = {data} />
    </div>
    </div>
  )
}

export default Form