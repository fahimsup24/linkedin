import { Avatar } from '@material-ui/core'
import { InsertComment, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/Post.css'
import me from '../images/me.jpg'
import InputOption from './InputOption'

function Post({ name, description, image, message }) {
  return (
    <div className='post'>
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
        <InputOption Icon={SendOutlined} title='Like' color='gray'/>
      </div>
    </div>
  )
}

export default Post
