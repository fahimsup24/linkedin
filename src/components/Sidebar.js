import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Sidebar.css'
import me from '../images/me.jpg'
import background from '../images/background.jfif'

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src={background} alt=""/>
        <Avatar className='sidebar__avatar' src={me} />
        <h2>Fahim Choudhury</h2>
        <h4>Software Engineer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">{Math.floor(Math.random() * (959-100+1) + 100)}</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">{Math.floor(Math.random() * (959-100+1) + 100)}</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('javascript')}
          {recentItem('react')}
          {recentItem('material-ui')}
          {recentItem('redux')}
          {recentItem('webdev')}
          {recentItem('fang')}
        </div>
    </div>
  )
}

export default Sidebar;
