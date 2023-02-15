import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Comment from './Comment'



const ListContext = React.createContext()

export default function ListContextProvider(props) {
  const [userArray , setUserArray] = useState([])
  const [userInput, setUserInput] = useState([])
  const [submitted , setSubmitted] = useState(true)
  const [commentBox , setCommentBox] = useState([])



  //component did update equivalent
  const addFunctionsData = async () => {
    const {data} = await axios.get(`https://api.vschool.io/sharonbrown/thing`)
    addFunctions(data)
  }
  useEffect(() =>{
    addFunctionsData(addFunctions)
  }, [submitted])


  //disables the inputs after axios.get
  function addFunctions(data){
    const updatedArray = data.map(item =>{
      item.inputDisabled = "disabled"
      item.editButtonText = "Edit"
      return item
    })
    setUserArray(updatedArray)
  }

  const handleChange = (id , e) =>{
    const updatedArray = userArray.map(item => {
      if(id === item._id){
        const updatedItem = {...item , [e.target.name]: e.target.value }
        setUserInput(updatedItem)
        return updatedItem
      }
      return item
    })
    setUserArray(updatedArray)
  }

  const addComment = (item) => {
    setCommentBox([
      ...commentBox, 
      <Comment 
        key = {item._id}
        id = {item._id}
        //makes unique number so comments are unique
        index = {commentBox.length}
        idIndex = {item._id + commentBox.length + Math.floor(Math.random() * 100)}
        />
    ])
  }

  const handleChangeComment = (id, idIndex, e) =>{
    const updatedComment = commentBox.map(item =>{
      const {name, value } = e.target
      if(idIndex === item.props.idIndex){
        return {...item, [name]: value}
      }
      else return item
    })
    console.log(updatedComment)
    setCommentBox(updatedComment)
  }

  const deleteComment = (idIndex) =>{
    const updatedCommentBox = commentBox.filter(item =>{
      if(idIndex !== item.props.idIndex){
        return (item)
      }
    })
    setCommentBox(updatedCommentBox)
  }

  //edit button function
  const handleEdit = (id) =>{
    const updatedArray = userArray.map(item =>{
      if(id === item._id && item.inputDisabled === ""){
        item.inputDisabled = ""
        item.editButtonText = "Save"
      }
      else if (id === item._id && item.inputDisabled === ""){
        item.inputDisabled = 'disabled'
        item.editButtonText = 'Edit'
      } 
      else if(id !== item._id){
        item.editButtonDisable = "disable"
      } 
      return item
    })
    setUserArray(updatedArray)
  }

  //save button and axios put
  const handleSave = (id) =>{
    axios.put('https://api.vschool.io/sharonbrown/thing/' + id , userInput)
    .then(function(res)  {
      console.log(`Updated Successfully ${JSON.stringify(res.data)}`)
      setSubmitted(!submitted)
    }).catch(err =>{
      console.log(err)
    })
  }

  //delete item button
  const handleDelete = async (id) =>{
    const res = await axios.delete('https://api.vschool.io/sharonbrown/thing/', {id}).then(res =>{
      res.data
      .remove()
    })
    
    
    
    
    // axios.delete('https://api.vschool.io.sharonbrown/thing/' + id)
    // .then(res =>{
    //   console.log(res.data.msg)
    // })
    // .catch(err => {console.log(err) })
    // const updatedArray = userArray.filter(item => (id !== item._id))
    // return setUserArray(updatedArray)
  }

  return (
    <ListContext.Provider value = {{
      userArray, 
      handleDelete, 
      submitted, 
      setSubmitted, 
      handleChange, 
      handleEdit, 
      handleSave, 
      commentBox, 
      setCommentBox, 
      handleChangeComment, 
      deleteComment, 
      addComment
    }}>
    {props.children}
    </ListContext.Provider>
  )
}
export { ListContextProvider, ListContext }