import Feed from './components/Feed';
import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { selectUser } from './features/userSlice'
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />

      {
        !user ? (
          <Login />
        ) : (
          <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        )
      }
        {/* Widgets */}
    </div>
  );
}

export default App;
