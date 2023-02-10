import {useState , useEffect} from 'react'



const ImageInputBox = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  console.log(selectedImage)
  return (
  <div className='input-container'>
  <input 
  accept="image/*" 
  type="file" 
  id="select-image" 
  style = {{display: 'none'}}
  onChange = {e => setSelectedImage(e.target.files[0])}

  />
 
  <label htmlFor="select-image">
  <button 
  variant="contained" 
  color="primary"
  component = "span"
  >
    Upload Ugly Image
  </button>
</label>
</div>)
};
export default ImageInputBox