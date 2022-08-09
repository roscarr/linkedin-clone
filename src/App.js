import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './feed/Feed';
import { auth } from './firebase';
import Header from './header/Header';
import Login from './login/Login';
import Sidebar from './sidebar/Sidebar';
import { useDispatch } from 'react-redux/es/exports';
import Widgets from './widgets/Widgets';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth) {
        dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          } ))
      }else{
        dispatch(logout())
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ?<Login/>:(
         <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
      )}
    </div>
  );
}

export default App;
