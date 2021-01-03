import { Create, Panorama, OndemandVideo, Event, Assignment } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import post1 from '../images/post1.JPG'
import { db } from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => 
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      ))
  }, [])
  
  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: 'Software Engineer',
      message: input,
      image: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    
    setInput('')
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost} type='submit'></button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Panorama} title='Photo' color='#70b5f9'/>
          <InputOption Icon={OndemandVideo} title='Video' color='#e7a33e'/>
          <InputOption Icon={Event} title='Event' color='#c0cbcd'/>
          <InputOption Icon={Assignment} title='Write article' color='#7fc15e'/>
        </div>
      </div>
      <FlipMove>
        {posts.map(({
          id, data: { name, description, message, image }
        }) => (

            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            image={image}
            />
        ))}
      </FlipMove> 
    </div>
  )
}


export default Feed
