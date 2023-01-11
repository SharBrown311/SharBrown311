import React from 'react'

export default function BlogPost(props){
  return (
    <div className='blogpost'>
    <h2 className='blogTitle'> {props.title}</h2>
    <p className='blogsubTitle'> {props.subTitle}</p>
    <p className='postedBy'><span className = "postedBy-text">Posted by</span>
     <a href='' className='blogAuthor'> {props.author} </a><span className='postedBy-date'>
     {props.date}</span>
    </p>
    <hr />
    </div>
  )
};