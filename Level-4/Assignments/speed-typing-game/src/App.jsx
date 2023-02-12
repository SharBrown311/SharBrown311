import useWordGame from "./hooks/wordGame"
import './App.css'

function App() {
  const {
    timeRemaining, 
    isTimeRunning, 
    handleChange, 
    startClock, 
    textBoxRef, 
    wordCount, 
    text
  } = useWordGame(10)
  return (
    <div className="App">
      <br />
      <h1>How fast do you type?</h1>
      <textarea 
        ref={textBoxRef}
        value = {text}
        onChange = {handleChange}
        disabled ={!isTimeRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startClock} disabled = {isTimeRunning}>{wordCount > 0 ? "Play Again" : "Start"}</button>
      {wordCount > 0 && <h1>Word Count: {wordCount}</h1>}
    </div>
  )
}

export default App
