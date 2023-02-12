import React,{useState,useEffect} from 'react'
import { auth } from './firebase';
import './Home.css'

const Home = () => {
  const [user,setUser]=useState('')
  useEffect(()=>{
    const unsubscribe=  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
         setUser(authUser)
   
         if(authUser.displayName){
           //dont update username
         }
      }else{
          setUser(null);
      }
    })
    return()=>{
      //Perform some Cleanup actions.
      unsubscribe();
    }
  },[])
 


  return (
    <div>
       <ul className="sidebar">
    <li><a href="/">Home</a></li>
    <li>Revise</li>
    <li><a href="/qna">Add Q & A</a></li>
    <li><a onClick={()=>auth.signOut()}>Sign Out</a></li>
  </ul>
  <input type="checkbox" id="sidebar-btn" className="sidebar-btn" checked/>
  <label for="sidebar-btn"></label>
  <div className="content">
<h1>Hello {user.displayName}, </h1>
<div className='card_container'>
<div className="card">
<a href='/ancient'>
        <div className="title">
      <h1>Ancient</h1>
      {/* <h2>"Frontend Developer"</h2> */}
    </div>
    <div className="card_content">
  <div className="social"> 
          {/* <i className="fab fa-codepen"></i>
      <a href="https://codepen.io/umurkose/" target="_blank">
        codepen.io/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fab fa-linkedin"></i>
<a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
      linkedin.com/in/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fas fa-globe-europe"></i>
<a href="https://umurkose.com" target="_blank">
      umurkose.com</a> */}
      </div> 
    </div>
  <div className="circle"></div>
  </a>
  </div>

  <div className="card">
  <a href='/medieval'>
        <div className="title">
      <h1>Medieval</h1>
      {/* <h2>"Frontend Developer"</h2> */}
    </div>
    <div className="card_content">
<div className="social">
          {/* <i className="fab fa-codepen"></i>
      <a href="https://codepen.io/umurkose/" target="_blank">
        codepen.io/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fab fa-linkedin"></i>
<a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
      linkedin.com/in/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fas fa-globe-europe"></i>
<a href="https://umurkose.com" target="_blank">
      umurkose.com</a> */}
      </div> 
    </div>
  <div className="circle"></div>

  </a>
  </div>

</div>

<div className='card_container'>
<div className="card">
<a href='/ca'>
        <div className="title">
      <h1>CA</h1>
      {/* <h2>"Frontend Developer"</h2> */}
    </div>
    <div className="card_content">
 <div className="social">
          {/* <i className="fab fa-codepen"></i>
      <a href="https://codepen.io/umurkose/" target="_blank">
        codepen.io/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fab fa-linkedin"></i>
<a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
      linkedin.com/in/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fas fa-globe-europe"></i>
<a href="https://umurkose.com" target="_blank">
      umurkose.com</a> */}
      </div> 
    </div>
  <div className="circle"></div>
  </a>
  </div>


  <div className="card">
  <a href='/polity'>
        <div className="title">
      <h1>Polity</h1>
      {/* <h2>"Frontend Developer"</h2> */}
    </div>
    <div className="card_content">
 <div className="social">
          {/* <i className="fab fa-codepen"></i>
      <a href="https://codepen.io/umurkose/" target="_blank">
        codepen.io/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fab fa-linkedin"></i>
<a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
      linkedin.com/in/umurkose</a> */}
      </div>
      
<div className="social">
    {/* <i className="fas fa-globe-europe"></i>
<a href="https://umurkose.com" target="_blank">
      umurkose.com</a> */}
      </div> 
    </div>
  <div className="circle"></div>
  </a>
  </div>

</div>

  </div>
    </div>
    
  )
}

export default Home