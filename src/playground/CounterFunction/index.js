import { useRef, useState } from "react";

export default function CounterFunction() {
  const [counter, setCounter] = useState(3);
  const [lastAction, setLastAction] = useState('none');

  const inputIncrease = useRef();
  const inputDecrease = useRef();

  const handleIncrementClick = () => {
    setCounter(counter + 1);
    setLastAction('Increased');
    inputIncrease.current.focus();
  }

  const handleDecrementClick = () => {
    setCounter(counter - 1);
    setLastAction('Decreased');
    inputDecrease.current.focus();
  }
  

  return (
    <div>
      Counter: {counter}
      <div>Last Action: {lastAction}</div>
      <input 
        type='text'
        placeholder='Focus on increase'
        ref={inputIncrease}
      />
      <button onClick={handleIncrementClick}>Increase</button>
      <button onClick={handleDecrementClick}>Increase</button>
      <input 
        type='text'
        placeholder='Focus on decrease'
        ref={inputDecrease}
      />    
    </div>
  );
}

