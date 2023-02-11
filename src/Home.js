import React from 'react'
import './Home.css'

const Home = () => {
  
 


  return (
    <div>
       <ul className="sidebar">
    <li href="/">Home</li>
    <li href="/">Revise</li>
    <li href="/">Add Q & A</li>
    <li href="/">Sign Out</li>
  </ul>
  <input type="checkbox" id="sidebar-btn" className="sidebar-btn" checked/>
  <label for="sidebar-btn"></label>
  <div className="content">
<h1>Hello XYZ, </h1>
<div className='card_container'>
<div className="card">
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
  </div>
  <div className="card">
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
  </div>

</div>

<div className='card_container'>
<div className="card">
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
  </div>
  <div className="card">
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
  </div>

</div>

  </div>
    </div>
    
  )
}

export default Home