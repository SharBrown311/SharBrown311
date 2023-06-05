
import React from 'react';
import Card from './Card';
import "./css/Study.css"
import "../App.css"

function Study(props) {
  const { cards, data } = props;

  return (
    <div className = "Study">
      <div className='list'></div>
      <ul className='study-list'>

        <Card className = "card-component-study" card={cards} showAnswer={true} data={data} />

      </ul>
    </div>
  );
}

export default Study;
