import {useContext} from 'react'
import {FormContext} from './formContext'
function Form(){
  const{
    onChange, 
    onSubmit
  } = useContext(FormContext)


  return(
    <div>
    <h1>Ugly Things</h1>
    <form onSubmit={onSubmit}>
      <label>Title of Image:</label>
      <input 
      type='text'
        name = 'title'
        onChange = {onChange}
      />
      <br />
      <label>Description of Image:</label>
      <input 
        type='text'
        name = 'description'
        onChange = {onChange}
      />  
      <br />
      <label>Upload Image File: </label>
      <input 
        type = 'text'
        name = 'imgUrl'
        onChange = {onChange}
      />
      <div className='submit-button-container'>
      <button>Submit</button>
      </div>
      </form>
    </div>
  )
}
export default Form