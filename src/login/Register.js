import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase'

import './Register.css'

function Register() {
    const history=useHistory()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
  
    function register(e){
        e.preventDefault();
        if(password===confirmpassword){
          
     auth.createUserWithEmailAndPassword(email,password).then(auth=>{
    
         history.push('/')
         return auth.user.updateProfile({
             displayName:username
            })
    }).catch(error=>{
      alert(error.message)
    })
}
    }
 

    return (
        <div className="register">
           <h2>Register</h2>
            <div className="register_form">
                <form>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className="input_register" placeholder="Username"/>
                    <input  value={email} onChange={(e)=>setEmail(e.target.value)} className="input_register" placeholder="Email"/>
                    <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="input_register" type="password" placeholder="Password"/>
                    <input  value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="input_register" type="password" placeholder="Confirm Password"/>
                 
                    <button onClick={register} className="register_button" color="primary" variant="contained">Register</button>
                    
                    <p>Already have an account? <a className="a" href="/">Login</a></p>
                </form> 

            </div>
        </div>
    )
}

export default Register
