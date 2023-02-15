import React, {useState , useContext} from 'react'
import axios from 'axios'
import { ListContext } from './listContext' 

const FormContext = React.createContext()



function FormContextProvider(props){
  const [userInput , setUserInput] = useState({})
  const {submitted, setSubmitted} = useContext(ListContext)

  const onChange = (e) =>{
    const { name , value} = e.target
    setUserInput(prevInput => 
      ({...prevInput, [name]: value })
      )
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://api.vschool.io/sharonbrown/thing', userInput)
    .then(function(res){
      console.log(`Successfully Added ${JSON.stringify(res.data)}`)
      setSubmitted(!submitted)
    }).catch(err =>{
      console.log(err)
    })
  }
  return(
    <FormContext.Provider value = {{onChange , onSubmit}}>
      {props.children}
    </FormContext.Provider>
  )
}
export {FormContextProvider , FormContext}