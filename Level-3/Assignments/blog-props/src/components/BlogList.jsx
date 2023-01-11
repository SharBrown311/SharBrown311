import React from 'react';
import Blogdata from '../components/Blogdata';
import BlogPost from '../components/BlogPost'

export default function BlogList(){
    const post = Blogdata.map((item, index) => {
      return(
        <BlogPost 
          key = {index}
          title = {item.title}
          subTitle ={item.subTitle}
          author ={item.author}
          date = {item.date}     
          />
      )
    })
    return(
      <div className='postReturn'>
        {post}
      </div>
    )
  };