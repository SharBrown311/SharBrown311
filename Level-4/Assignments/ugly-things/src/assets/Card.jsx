import React, { useState } from 'react';
// import './Card.css';

export const CardContext = React.createContext({
  card: {}
});

function Card(props) {
  const { children, submit = () => {}, initialValues } = props;

  const [card, setCard] = useState(initialValues);

  const handleCardChange = (e) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = e.target;

    // Update state
    // Assign new value to the appropriate form field
    setCard({
      ...card,
      [name]: value
    });
  };

  return (
    <form className="card">
      <CardContext.Provider value={{
        card,
        handleCardChange
      }}>
        {children}
      </CardContext.Provider>

      <button type="button" onClick={() => submit(card)}>
        Submit
      </button>
    </form>
  );
}

export default Card;