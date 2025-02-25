import React from 'react'
import '../css/Header.css'
import { SearchOutlined, Home, People, BusinessCenter, SmsRounded, Notifications } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import HeaderOption from './HeaderOption'
import me from '../images/me.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { logout, selectUser } from '../features/userSlice'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
        <div className="header__search">
          <SearchOutlined />
          <input placeholder='Search' type="text"/>

        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={People} title='My Network'/>
        <HeaderOption Icon={BusinessCenter} title='Jobs'/>
        <HeaderOption Icon={SmsRounded} title='Messaging'/>
        <HeaderOption Icon={Notifications} title='Notifications'/>
        <HeaderOption onClick={logoutOfApp} avatar={me} title='Me'/>
      </div>
    </div>
  )
}

export default Header
