import React from 'react'

function Counter({counter, increment, decrement}) {
  return (
    <div>
      <div>{counter}</div>
      <div>
      <button type='button' onClick={decrement}>-</button>
      <button type='button' onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
