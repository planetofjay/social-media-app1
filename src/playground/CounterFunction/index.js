import { useState } from "react";

export default function CounterFunction() {
  const [counter, setCounter] = useState(3);
  const [lastAction, setLastAction] = useState('none');

  const handleIncrementClick = () => {
    setCounter(counter + 1);
    setLastAction('Increased');
  }

  const handleDecrementClick = () => {
    setCounter(counter - 1);
    setLastAction('Decreased');
  }
  

  return (
    <div>
      Counter: {counter}
      <div>Last Action: {lastAction}</div>
      <button onClick={handleIncrementClick}>Increase</button>
      <button onClick={handleDecrementClick}>Increase</button>    
    </div>
  );
}

