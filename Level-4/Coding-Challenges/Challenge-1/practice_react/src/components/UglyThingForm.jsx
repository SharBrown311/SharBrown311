import {useState} from 'react'

export default function UglyThingForm() {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() =>{
    if(selectedImage){
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])


  return (
    <div className='form-control'>
      <input
      name = 'imageUrl' 
      accept='image/*'
      type='file'
      className='select-image'
      placeholder='Image Url'
      style={{display: 'none'}}
      onChange = {e => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor='select-image'>
        <Button variant = "container" color = "primary" component= "span">Upload Image</Button>
      </label>
    </div>
  )
}
