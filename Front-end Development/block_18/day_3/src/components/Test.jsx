import React, { useState, useEffect } from 'react';

function Test() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('123');
  }, [counter]);
  return (
    <div>
      <button type="button" onClick={ () => setCounter(counter + 1) }>Increment</button>
      <button type="button" onClick={ () => setCounter(counter - 1) }>Decrement</button>
      <div className="counter">{counter}</div>
    </div>
  );
}

export default Test;
