import {useState} from 'react'

function FileInputContext(){
  const [file, setFile] = useState()
    function handleChange(e){
      console.log(e.target.files)
      setFile(URL.createObjectURL(e.target.files[0]))
    }


    return(
      <div>
      <h4>Add Ugly Image: </h4>
      <input type='file'
      name = 'fileUpload'
      onChange={handleChange}
      />
      <img src = {file} />
           {/*image file*/}
      </div>
)



}
export default FileInputContext