import React, { useState } from 'react'
import '../css/Login.css'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const register = () => {  
    if (!name) {
      return alert('Please enter name')
    }
    auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          image: profilePic,
          })
        )
      })
    })
    .catch(error => alert(error))
  }

  const loginToApp = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
      }))
    })
    .catch(error => alert(error))
  }
  return (
    <div className='login'>
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0VKs" alt=""/>

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (Required for registry)'
          type='text' />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)'
          type="text"/>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type="email" />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type="password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member? {''}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
