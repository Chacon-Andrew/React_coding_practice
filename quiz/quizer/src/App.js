import './App.css';
import React, {useState, useEffect} from 'react'

const answers_beg = [
  [
    ["Andrew", true],
    ["Karl", false],
    ["Andreew", false],
    ["Hello!", false]
  ],
  [
    ["Black", false],
    ["Green", true],
    ["Pink", false],
    ["Orange", false]
  ],
  [
    ["17", false],
    ["21", false],
    ["69", false],
    ["23", true]
  ]
]

const questions = [
  ["What is my Name?", answers_beg[0]],
  ["What is my favorite Color?", answers_beg[1]],
  ["How old am I?", answers_beg[2]]
]

function App() {
  const [question, SetQuestion] = useState("")
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(false)

  const handleChange = (e) =>{
    setSelected(e.target.value === "true")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(selected){
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    console.log('render')
    console.log(index)
    if(index < questions.length){
      setAnswers(questions[index][1])
      SetQuestion(questions[index][0])
    }
  }, [question, answers, index])

  return (
    <div>
      {
        index < questions.length ? <form onSubmit={handleSubmit}>
        <h1>{question}</h1>
        <div style={{display: 'flex', flexDirection: 'column'}}>{
          answers.map((answer) => {
            return (<label key={answer[0]}>{answer[0]} 
            <input type='radio' value={answer[1]} name='quiz_answers' onChange={handleChange}/></label>)
          })
        }</div>
        <input type='submit' value='submit'/>
      </form> : <h1>Ur done</h1>
      }
    </div>
  );
}

export default App;
