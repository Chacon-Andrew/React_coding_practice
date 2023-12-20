import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [question, SetQuestion] = useState("")
  const [answers, setAnswers] = useState([])

  const questions = {
    "What is my Name?": answers_beg[0],
    "What is my favorite Color?": answers_beg[1],
    "How old am I?": answers_beg[2]
  }

  const answers_beg = [
    [
      {"Andrew": true},
      {"Karl": false},
      {"Andreew": false},
      {"Hello!": false}
    ],
    [
      {"Black": false},
      {"Green": true},
      {"Pink": false},
      {"Orange": false}
    ],
    [
      {"17": false},
      {"21": false},
      {"69": false},
      {"23": true}
    ]
  ]

  const buildMap = (questions, answers_beg) => {
    const map = new Map()
    for(let i = 0; i < questions.length; i++) map.set(questions[i], answers_beg[i]);
    return map;
  }

  useEffect(() => {

  }, [question, answers])
  return (
    <div>
      
    </div>
  );
}

export default App;
