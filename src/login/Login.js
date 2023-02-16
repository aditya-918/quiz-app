import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Spinner from 'react-spinkit'
import { auth } from '../firebase'
import './Login.css'

function Login() {
    const history=useHistory()
 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function login(e){
        e.preventDefault();
         auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            history.push('/')
        })
        .catch((error)=>alert(error.message))
    }
 
    const [user,setUser]=useState('');

    useEffect(()=>{
      const unsubscribe=  auth.onAuthStateChanged((authUser)=>{
        if(authUser){
           setUser(authUser)
     
           if(authUser.displayName){
             //dont update username
           }
        }else{
            setUser(null);
            history.push('/login')
        }
      })
      return()=>{
        //Perform some Cleanup actions.
        unsubscribe();
      }
    },[])
    return (
        <>

{!user?(
         <div className="app_loading">
         <div className="app_loading_container">
 <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none"/>
 </div>
 </div>
      ):(
<div className="login">

         <h2>Login</h2>
            <div className="login_form">
   
   <form>
   <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="input_email" required type="email"/>
   <p id="my-helper-text">We'll never share your email.</p>
  
   <input value={password} onChange={(e)=>setPassword(e.target.value)} className="input_password" placeholder="Password" required type="password" />
   <button className="login_button" color="primary" variant="contained" onClick={login}>Login</button>

  <p>Do not have an account? <a className="a" href="/register"> Register</a></p>
   </form>
   </div>
   </div>
)}
        </>
    )
}

export default Login

