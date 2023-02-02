import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from "uuid";
// import Cards from './assets/Cards'


function App() {
  const [item, setItem] = useState({})
  const [items , setItems] = useState([])
  
  // const SAMPLE_FLASHCARDS = [
  //   {
  //     id: 1,
  //     question: "question 1", 
  //     answer: "answer 1 ", 
  //     options: [
  //       '1', 
  //       '2', 
  //       '3', 
  //       '4'
  //     ]
  //   } 
  // ]

  const add = (e) => {
    e.preventDefault();
    const { question, answer } = item;
    const formValid = question && answer;
    if (!formValid) {
      return;
    }
    setItems((items) => [
      ...items,
      {
        id: uuidv4(),
        ...item
      }
    ]);
  };
  const deleteItem = (index) =>{
    setItems((items) => items.filter((_, i) => i !==index))
  }

  


  return (
    <div className="App">
    <h1 className='heading'>React Flash Cards</h1>
      <form onSubmit = {add} >
        <div>
        <label>Question:</label>
          <input className = "user-question" value = {item.question}
          onChange = {(e) =>
          setItem((item) => ({...item, question: e.target.value}))}/>
        </div>
              <div className = 'container'>
                <label>Answer:</label>
               <input className = "user-answer"onChange = {(e) =>
                setItem((item) => ({...item, answer: e.target.value}))}/>
              </div>
              <button className = "user-submit" type = 'submit'>Submit Question</button>
      </form>
      <div className='question-answer-container'>
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <b className='label'>Question:</b>
            <div className='entire-question'>
            <p className='outcome-question'>{item.question}</p>
            <div className='entire-answer'>
            </div>
            <b className='label'>Answer:</b>
            <p className='outcome-answer'>{item.answer}</p>
            </div>
            <button className='delete-button' onClick={() => deleteItem(index)}>Delete</button>
          </div>
        );
      })}
    </div>
    </div>

  );
}
export default App