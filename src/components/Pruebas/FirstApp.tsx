import { useState } from "react";
import {CounterApp} from "./CounterApp";


const FirstApp = () => {
  const [counter, setCounter] = useState<number>(0);
  const [titles, setTitles] = useState<string>('');

  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1);
  }
  
  const handleDecrementCounter = () => {
    if(counter === 0) return;
    setCounter(prev => prev - 1);
  }

  return (
    <>
      <p>{counter}</p>

      <button onClick={handleIncrementCounter}>Sumar +1</button>
      <button onClick={handleDecrementCounter}>Restar -1</button>
      <button onClick={() => setTitles('Nuevo nombre')}>Cambiar nombre</button>
      <CounterApp title={`${titles ? titles : 'React Memo'}`} subTitle="Si como no" name="Jairo" />
    </>
  )
}

export default FirstApp