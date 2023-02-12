import React,{useState} from 'react'
import './QNA.css'
import { db } from './firebase'

const QNA = () => {
  const [question,setQuestion]=useState('');
  const [answer,setAnswer]=useState('');
  const [section,setSection]=useState('');
  function submitQA(){
    if(question!=='' && answer!=='' && section!==""){
    db.collection('question-answers').add({
      question:question,
      answer:answer,
      section:section,
      
    })
    alert('Question added to the List')
    setQuestion('')
    setAnswer('')
    setSection('')
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
     
        <input className="add_a" placeholder="Add Answer" value={answer} onChange={event=> setAnswer(event.target.value)}/>
        {/* <button type="Submit">Add Another Question  </button> */}
        {/* <label for="cars">Choose a category:</label> */}
  <select className="select_sections" id="cars" value={section} onChange={event=> setSection(event.target.value)}>
          <option value="">Select Section</option>
          <option value="ancient">Ancient</option>
          <option value="medieval">Medieval</option>
          <option value="ca">CA</option>
          <option value="polity">Polity</option>
  </select>
  <br />
        </div>
        <button className="qna_submit" onClick={submitQA}>Submit</button>
        </div>
    </div>
  )
}

export default QNA