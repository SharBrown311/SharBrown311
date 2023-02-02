import React, { useState } from 'react'
import FlashcardList from './assets/FlashcardList'
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(REACT_FLASHCARDS)
  return(
    <FlashcardList  flashcards= {flashcards}/>
  )
}
const REACT_FLASHCARDS = [
 {
    id: 1, 
    question: 'JSX stands for what?', 
    answer: 'JavaScript XML',
    options: [
      'A. ', 
      'B. ', 
      'C. ', 
      'D. '
    ]
  }, 
  {
    id: 2, 
    question: 'Which of the following concepts is/are key to ReactJS?', 
    answer: 'C. Both of the above',
    options: [
      'A. Component Oriented Design', 
      'B. Event delegation model', 
      'C. Both of the above', 
      'D. None'
    ]
  }, 
  {
    id: 3, 
    question: 'What are the life cycles of ReactJS?', 
    answer: 'D. All of these', 
    options: [
      'A. Initialization', 
      'B. State/Prop Updates', 
      'C. Destruction', 
      'D. All of these'
    ]
  }, 
  {
    id: 4, 
    question: 'Which of the following is used to pass the data from parent to child?', 
    answer: 'A. State', 
    options: [
      'A. State', 
      'B. Props', 
      'C. Both of these', 
      'D. None'
    ]

  }, 
  {
    id: 5, 
    question: 'How can you access the state of a component from inside of a member function?', 
    answer: 'D. this.values', 
    options: [
      'A. this.getState()', 
      'B. this.state', 
      'C. this.prototype.stateValue', 
      'D. this.values'
    ]
  }, 
  {
    id: 6,
    question: ' What is a good use case for using a function while rendering a dynamic list of items?', 
    answer: 'A. If we need to compute a value based on the properties of items in the loop.', 
    options: [
      'A. If we need to compute a value based on the properties of items in the loop.', 
      'B. None. Functions should not be used while rendering a dynamic list.', 
      'C. To make the code shorter'
    ]
  }, 
  {
    id: 7, 
    question: 'What is the second argument for setState useful for?', 
    answer: 'A. To invoke code after the setState operation is done.',
    options: [
      'A. To invoke code after the setState operation is done.', 
      'B. To replace the state completely instead of the default merge action', 
      'C. To access the previous state before the setState operation.'
    ]
  }, 
  {
  id: 9, 
  question: 'ReactJS uses _________ to increase performance.', 
  answer: 'A. Virtual DOM', 
  options: [
    'A. Virtual DOM', 
    'B. Original DOM', 
    'C. Both of the above', 
    'D. None of the above'
  ]
  }, 
  {
    id: 10, 
    question: 'What is the default port for webpack dev server?', 
    answer: 'B. 8080', 
    options: [
      'A. 3000', 
      'B. 8080', 
      'C. 3306', 
      'D. 8809'
    ]
  }, 
  {
    id: 11, 
    question: 'What are two ways data gets handled in react?', 
    answer: 'A. state & props', 
    options: [
      'A. state & props',
      'B. services & components', 
      'C. state & services', 
      'D. state & component'
    ]
  }, 
  {
    id: 12, 
    question: 'React Js is developed by Facebook?', 
    answer: 'A. Facebook', 
    options: [
      'A. Google', 
      'B. Microsoft', 
      'C. Facebook', 
      'D. None of the above'
    ]
  }, 
  {
    id: 13, 
    question: 'What are the limitations of ReactJS?', 
    answer: 'D. All of these', 
    options: [
      'A. React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for the development', 
      'B. React is using inline templates and JSX. This can seem awkward to some developers', 
      'C. The library of react is too large', 
      'D. All of these'
    ]
  }, 
  {
    id: 14, 
    question: 'How many stages are there in React js life cycle?', 
    answer: 'C. 3', 
    options: [
      'A. 1', 
      'B. 2', 
      'C. 3', 
      'D. 0'
    ]
  },
  {
    id: 15, 
    question: 'In relation to React JS component lifecycle, which statement is true?', 
    answer: 'B. Only Class components can have a life cycle.',
    options: [
      'A. Only function component can have a life cycle.', 
      'B. Only Class components can have a life cycle.', 
      'C. Both types of components can have life cycle.', 
      'D. None of the above'
    ]
  }, 
  {
    id: 16, 
    question: 'In react, this is used to pass data to component from outside?', 
    answer: 'C. props', 
    options: [
      'A. set state', 
      'B. render with the argument', 
      'C. props', 
      'D. propTypes'
    ]
  }, 
  {
    id: 17, 
    question: 'Ref in react component us used to assign reference to DOM elements. Ref can be created by_____?', 
    answer: 'C. Both of above', 
    options: [
      'A. Calling React.createRef method', 
      'B. Assigning a value to ref attribute in JSX', 
      'C. Both of above', 
      'D. None of above'

    ]
  }, 
  {
    id: 18, 
    question: 'Everything in React is a ____?', 
    answer: 'B. component', 
    options: [
      'A. module', 
      'B. component', 
      'C. package', 
      'D. class'
    ]
  }, 
  {
    id: 19, 
    question: 'Which of the following is a correct definition of state in react?', 
    answer: 'B. An internal data store (object) of component', 
    options: [
      'A. A persistent storage', 
      'B. An internal data store (object) of component', 
      'C. Both', 
      'D. None'
    ]
}, 
{
  id: 20, 
  question: 'The state in React can be updated by call to setState method. These calls are ____?', 
  answer: 'B. Asynchronous in nature', 
  options: [
    'A. Synchronous in nature', 
    'B. Asynchronous in nature', 
    'C. Are asynchronous but can be made synchronous when required', 
    'D. None of the above'

  ]
}, 
{
  id: 21, 
  question: 'Keys are given to a list of elements in react. These keys should be____?', 
  answer: 'B. Unique among the siblings only', 
  options: [
    'A. Unique in the DOM', 
    'B. Unique among the siblings only', 
    'C. Does not require it to be unique', 
    'D. None of the above'
  ]
}, 
{
  id: 22, 
  question: 'React is a _________?', 
  answer: 'A. JavaScript library', 
  options: [
    'A. JavaScript library', 
    'B. JavaScript Framework', 
    'C. Both of the above', 
    'D. None of the above'
  ]
}, 
{
  id: 23, 
  question: 'Props in react can _______ ?', 
  answer: 'B. Not be changed in ', 
  options: [
    'A. Be changes inside the component', 
    'B. Not be changed in the component', 
    'C. Be changes in side other component', 
    'D. None of the above'
  ]
}, 
{
id: 24, 
question: 'In React.js which one of the following is used to create a class for Inheritance ?', 
answer: 'B. Extends', 
options: [
  'A. Create', 
  'B. Extends', 
  'C. Inherits', 
  'D. Delete'
]
}, 
{
  id: 25, 
  question: 'Which of the following method is true about referring parent class in React.js ?', 
  answer: 'D. super()', 
  options: [
    'A. self()', 
    'B. inherits()', 
    'C. this()', 
    'D. super()'
  ]
}

]

export default App
