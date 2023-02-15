import {useContext} from 'react'
import { ListContext } from './listContext'
import Comment from './Comment'


function UglyArray(props){
  const{
    userArray, 
    handleChange, 
    handleDelete, 
    handleEdit, 
    commentBox, 
    addComment
  } = useContext(ListContext)
  return(
    <div className='list'>
      {userArray.map(item =>(
        <div key={item._id} className= 'listItem'>
        <input className='list-title'
          value = {item.title}
          name = "title"
          type = 'text'
          onChange = {(e => handleChange(item_id , e))}
          disabled = {item.inputDisabled}
          />
        <input 
        value = {item.description}
        name = 'description'
        className='list-description'
        onChange={(e => handleChange(item._id, e))}
        disabled = {item.inputDisabled}
        />
        <img src = {item.imgUrl}
        alt = {item.title}
        />
        <input className='list-link'
          type = 'text'
          name = 'imgUrl'
          value = {item.imgUrl}
          onChange={(e => handleChange(item._id, e))}
          disabled = {item.inputDisabled}
          />
        {commentBox.map((comment , index) =>{
          if(item._id === comment.props.id){
            return(
              <Comment 
              key = {comment.props.id + index}
              item = {comment}
              commentIndex = {index} 
              itemIsDisabled = {item.inputDisabled}
              />
            )
          }
        })}
        <div className='button-container'>
          <button
          disabled = {item.editButtonDisabled} 
          onClick = {() => handleEdit(item._id)}>{item.editButtonText}</button>

        <button onClick = {() => addComment(item)}>Add Comment</button>

          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
        </div>
   
      ))}
    </div>
  )
}
export default UglyArray