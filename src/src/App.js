import Feed from './components/Feed';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/Login';
import { auth } from './firebase';
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  
  return (
    <div className="app">
      

      {
        !user ? (
          <Login />
        ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
        )
      }
        {/* Widgets */}
    </div>
  );
}

export default App;
