import React,{useState} from 'react'
import './QNA.css'
import { db } from './firebase'

const QNA = () => {
  const [question,setQuestion]=useState('');
  const [answer,setAnswer]=useState('');
  const [section,setSection]=useState('');
  return (
    <div>Add Questions
        <div className="container">
        <h1>Add Questions</h1>
        <div className="input_qna">
        <p>Q1</p> 
        <input className="add_q" placeholder="Add Questions" />
        <p>A1</p>
        <input className="add_a" placeholder="Add Answer" />
        {/* <button type="Submit">Add Another Question  </button> */}
        {/* <label for="cars">Choose a category:</label> */}
  <select className="select_sections" id="cars">
    <option value="volvo">Ancient</option>
    <option value="saab">Medieval</option>
    <option value="opel">CA</option>
    <option value="audi">Polity</option>
  </select>
  <br />
        </div>
        <button className="qna_submit" type="Submit">Submit</button>
        </div>
    </div>
  )
}

export default QNA