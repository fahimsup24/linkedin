import { Avatar } from '@material-ui/core'
import { InsertComment, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import '../css/Post.css'
import me from '../images/me.jpg'
import InputOption from './InputOption'

const Post = forwardRef(({ name, description, image, message }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={me}/>
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        {/* <img className='post__image' src={image} alt=""/> */}
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
        <InputOption Icon={InsertComment} title='Comment' color='gray'/>
        <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
        <InputOption Icon={SendOutlined} title='Send' color='gray'/>
      </div>
    </div>
  )
});

export default Post
