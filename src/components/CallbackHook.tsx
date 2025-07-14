import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";
import ShowIncrement2 from "./ShowIncrement2";

const CallbackHook = () => {

  const [count, setCount] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);

  const incrementCounter = useCallback(() => {
    setCount(prevValue => prevValue + 1);
  }, []);

  return (
    <div>
      <h1>CallbackHook</h1>
      <hr />
      <p>Counter: {count}</p>
      <ShowIncrement increment={setCount} />
      <ShowIncrement2 increment={incrementCounter} />
      <button onClick={() => setIsShow(!isShow)}>
        Cambiar estado {JSON.stringify(isShow)}
      </button>
    </div>
  )
}

export default CallbackHook;