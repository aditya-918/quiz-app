import React,{useEffect,useState} from 'react';
import './Medieval.css';
import { db } from '../firebase';
function Medieval() {
    const [medievalData,setMedievalData]=useState([]);
    const [counter,setCounter]=useState(0);
    const [display,setDisplay]=useState('none');
    useEffect(()=>{
    
        db.collection('question-answers').where('section','==','medieval').onSnapshot(snapshot =>{
            setMedievalData(snapshot.docs.map(doc =>({id:doc.id,collData:doc.data()})));
          })
       
    },[medievalData])

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
        <p class="que_para">{medievalData[counter]?.collData.question}</p>
        <p class="ans_para" style={{display:display}}>{medievalData[counter]?.collData.answer}</p>
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

export default Medieval