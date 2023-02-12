import React,{useEffect,useState} from 'react'
import './Ancient.css'
import { db } from '../firebase'
const Ancient = () => 
{
  const [ancientData,setAncientData]=useState([]);
  const [counter,setCounter]=useState(0);
  const [display,setDisplay]=useState('none');

  useEffect(()=>{
    
    db.collection('question-answers').where('section','==','ancient').onSnapshot(snapshot =>{
        setAncientData(snapshot.docs.map(doc =>({id:doc.id,collData:doc.data()})))
      })
    
},[ancientData])

function handleIncrement(){
    setDisplay('none')
     setCounter(counter+1);
     
 }
 function handleDecrement(){
     if(counter!==0){
         setDisplay('none')
         setCounter(counter-1);
     }
 }

 function showAnswer(){
     setDisplay('');
 }

  return (
    <div className='qa_div'>
    <div className="container">
        <h1>Questions</h1>
        <div className="input_qna">
        <p class="que_para">{ancientData[counter]?.collData.question}</p>
        <p class="ans_para" style={{display:display}}>{ancientData[counter]?.collData.answer}</p>
  <br />
        </div>
        <div className="dots">
        <div>
        <span class="dot_red" onClick={showAnswer}></span>
        </div>
        <div >
<span class="dot_green" onClick={handleIncrement}></span>
</div>
</div>
        </div>
    </div>
  )
}

export default Ancient