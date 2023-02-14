import {useContext} from 'react';
import { CardContext } from './CardContext';
import './CardInput.css'


function CardInput(props) {
  const{
    label,
    type = 'text', 
    name, 
    value,
    onChange, 
 } = props


 const cardContext = useContext(CardContext)
 const {card, handleCardChange} = cardContext

return (
    <div className="CardInput">
        <input
        placeholder={label}
        type={type} 
        name={name}
        value={card[name]}
        onChange={handleCardChange}
      />

    </div>
  )
}

export default CardInput;