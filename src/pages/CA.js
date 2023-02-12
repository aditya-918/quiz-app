import React,{useEffect,useState} from 'react'
import './CA.css';
import { db } from '../firebase';
function CA() {
    const [caData,setCAData]=useState([]);
    const [counter,setCounter]=useState(0);
    const [display,setDisplay]=useState('none');
    useEffect(()=>{
    
        db.collection('question-answers').where('section','==','ca').onSnapshot(snapshot =>{
            setCAData(snapshot.docs.map(doc =>({id:doc.id,collData:doc.data()})));
          })
        
    },[caData])

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
        <p class="que_para">{caData[counter]?.collData.question}</p>
        <p class="ans_para" style={{display:display}}>{caData[counter]?.collData.answer}</p>
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

export default CA