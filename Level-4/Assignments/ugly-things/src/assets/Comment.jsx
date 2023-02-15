import React from 'react'
import {useContext} from 'react'
import { ListContext } from './listContext'


export default function Comment(props) {
  const {
    handleChangeComments, 
    commentBox, 
    deleteComment, 
    // commentsDisabled
  } = useContext(ListContext)

    const disableButton = () =>{
      while(props.commentIndex === commentBox.length -1){
        return ""
      } 
      return(props.itemIsDisabled)
    }
  return (
    <div className='commentSection'>
      <textarea 
        className='text-comment'
        placeholder='Enter Your Comment here'
        onChange = {(e) =>handleChangeComments(props.item.props.id, props.item.props.idIndex, e)}
        disabled = {disableButton()}
        name = "comments"
        value = {props.item.comments}
      ></textarea>
      <button className='deleteComment'
      onClick = {() => deleteComment(props.item.props.idIndex)}>Delete Comment</button>
    </div>
  )
}
