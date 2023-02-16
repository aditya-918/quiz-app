import React,{useState} from 'react'
import './QNA.css'
import { db } from './firebase'

const QNA = () => {
  const [question,setQuestion]=useState('');
  const [answerA,setAnswerA]=useState('');
  const [answerB,setAnswerB]=useState('');
  const [answerC,setAnswerC]=useState('');
  const [answerD,setAnswerD]=useState('');
  const [section,setSection]=useState('');
  const [correctAns,setCorrectAns]=useState('');

  function submitQA(){
    if(question!=='' && answerA!=='' && answerB!=='' && answerC!=='' && answerD!=='' && section!=="" && correctAns!==''){
    db.collection('question-answers').add({
      question:question,
      answerA:answerA,
      answerB:answerB,
      answerC:answerC,
      answerD:answerD,
      section:section,
      correctAns:correctAns
      
    })
    alert('Question added to the List')
    setQuestion('')
    setAnswerA('')
    setAnswerB('')
    setAnswerC('')
    setAnswerD('')
    setSection('')
    setCorrectAns('')
  }else{
    alert('Fill all the fields');
  }
  }
  return (
    <div>Add Questions
        <div className="container">
        <h1>Add Questions</h1>
        <div className="input_qna">
       
        <input className="add_q" placeholder="Add Questions" value={question} onChange={event=> setQuestion(event.target.value)}/>
        <div>
        <input className="add_a" placeholder="Option A Answer" value={answerA} onChange={event=> setAnswerA(event.target.value)}/>
        <input className="add_a" placeholder="Option B Answer" value={answerB} onChange={event=> setAnswerB(event.target.value)}/>
        <input className="add_a" placeholder="Option C Answer" value={answerC} onChange={event=> setAnswerC(event.target.value)}/>
        <input className="add_a" placeholder="Option D Answer" value={answerD} onChange={event=> setAnswerD(event.target.value)}/>
        </div>
        {/* <button type="Submit">Add Another Question  </button> */}
        {/* <label for="cars">Choose a category:</label> */}
        <div>
  <select className="select_sections" id="cars" value={section} onChange={event=> setSection(event.target.value)}>
          <option value="">Select Section</option>
          <option value="ancient">Ancient</option>
          <option value="medieval">Medieval</option>
          <option value="ca">CA</option>
          <option value="polity">Polity</option>
  </select>

  <select className="select_sections" id="cars" value={correctAns} onChange={event=> setCorrectAns(event.target.value)}>
          <option value="">Correct Answer</option>
          {answerA!=='' && answerB!=='' && answerC!=='' && answerD!=='' &&(
          <>
          
          <option value={answerA}>{answerA}</option>
          <option value={answerB}>{answerB}</option>
          <option value={answerC}>{answerC}</option>
          <option value={answerD}>{answerD}</option>
          </>
          )}
  </select>
  </div>
  <br />
        </div>
        <button className="qna_submit" onClick={submitQA}>Submit</button>
        </div>
    </div>
  )
}

export default QNA