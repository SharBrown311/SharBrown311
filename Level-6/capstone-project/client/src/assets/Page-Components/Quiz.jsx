
import React, { useState } from 'react';
import Card from '../Cards/Card';
import "./css/Study.css"
import "../../App.css"
function Quiz(props) {
  const { cards, data } = props;
  const [cardIndex, setCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setShowAnswer(false);
    if (cardIndex + 1 < cards.length) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className='Quiz container'>
      {cardIndex + 1 <= cards.length ? (
        <div>
          <h3>Card {cardIndex + 1} of {cards.length}</h3>

          <Card className = "card-component-quiz" card={cards[cardIndex]} data = {data} showAnswer={showAnswer}  isQuizComp={true} />
          {!showAnswer && <button className='answer-quiz-button' onClick={() => setShowAnswer(true)}>Show Answer</button>}


          {showAnswer && (
            <div className='correct-and-incorrect'>
              <button className='correct' onClick={() => handleNextCard(true)}>Correct</button>
              <button className='incorrect' onClick={() => handleNextCard(false)}>Incorrect</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>Quiz Results</h3>
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {cards.length - correctAnswers}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;