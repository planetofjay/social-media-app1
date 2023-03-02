import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import { useState } from "react";

export default function Playground() {
  const [userName, setUserName] = useState('Mary');
  const [displayClassComp, setDisplayClassComp] = useState(false);
  const [displayFuncComp, setDisplayFuncComp] = useState(false);

  const handleUserNameChange = () => {
    setUserName('Jay');
  }

  return (

    <>
      <h1>Playground</h1>
      <button onClick={handleUserNameChange}>Change User Name</button>

      <hr />
      <h2>Counter Class</h2>
      <label>
        <input 
          type='checkbox' 
          checked={displayClassComp}
          onChange={(e) => setDisplayClassComp(e.target.checked)}
        />
        Display Counter Class
      </label>
      {displayClassComp && (
        <CounterClass userName={userName} />
      )}

      <hr />
      <h2>Counter Function</h2>
      <label>
        <input 
          type='checkbox'
          checked={displayFuncComp}
          onChange={(e) => setDisplayFuncComp(e.target.checked)}
        />
        Display Counter Function
      </label>
      {displayFuncComp && (
        <CounterFunction userName={userName} />
      )}
    </>

  );
  
}