import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import QNA from './QNA';
import Home from './Home'
import Ancient from './pages/Ancient';
import Login from './login/Login';
import Register from './login/Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { auth } from './firebase';
import Medieval from './pages/Medieval';
import Polity from './pages/Polity';
import CA from './pages/CA';

function App() {
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
    <div className="App">
 
     <Router>
     {!user?(
        <Switch>
    <Route path="/register">
     <Register/>
     </Route>
     <Route path="/">
     <Login/>
    
     </Route>
        </Switch>
        ):(
      <Switch>
      <Route path="/ca" component={CA} />
      <Route path="/polity" component={Polity} />
      <Route path="/medieval" component={Medieval} />
      <Route path="/ancient" component={Ancient} />
     <Route path="/qna" component={QNA} />
     <Route path="/" component={Home} /> 
     {/*  empty slash of path is always at bottom */}
      </Switch>
       )} 
     </Router>
     
    </div>
  );
}

export default App;
