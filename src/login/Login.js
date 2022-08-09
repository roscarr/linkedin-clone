import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { login } from '../features/userSlice'
import './Login.css'
function Login() {
  
    const [email,setEmail]=useState('')
    const [password,setPasword]=useState('')
    const [name,setName]=useState('')
    const [profilePic,setProfilePic]=useState('')
    const dispatch=useDispatch()
    const loginToApp=(e)=>{
        e.preventDefault()
       auth.signInWithEmailAndPassword(email,password)
       .then(userAuth=>{
        dispatch(login({
           email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            profileUrl:userAuth.user.photoURL
        }))
       }).catch(error=>alert(error))
    }
    const register=()=>{
       if(!name){
        alert("pleased enter a full name!")
       }
       auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName:name,
          photoURL:profilePic,
        }).then(()=>{
            dispatch(login({
              email:userAuth.user.email,
              uid:userAuth.user.uid,
              displayName:name,
              photoUrl:profilePic,
            }))
        })
       }).catch(error=>alert(error))
    }
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
      <form action="">
        <input type="text" placeholder='Full name (required if registering)' 
               value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" placeholder='profile pic URL (optional)' 
               value={profilePic} onChange={e=>setProfilePic(e.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password'
                value={password} onChange={e=>setPasword(e.target.value)} />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
