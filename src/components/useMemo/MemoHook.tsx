import { useMemo, useState } from "react"


const heavyStuff = (value:number = 1000) => {
  for (let index = 0; index < value; index++) {
    console.log('Ejecutando...');
  }
  return `${value} iteracciones realizadas`;
}

export const MemoHook = () => {
  const [counter, setCounter] = useState<number>(5000);
  const [show, setShow] = useState<boolean>(false);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div>
      <h1>Counter: <small>{ counter }</small></h1>
      <hr />

      {/* <h4>{heavyStuff(counter)}</h4> */}
      <h4>{memorizedValue}</h4>

      <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
      <button onClick={() => setShow(!show)}>{JSON.stringify(show)}</button>
    </div>
  )
}