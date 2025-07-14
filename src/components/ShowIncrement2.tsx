import { memo } from "react";

interface ShowIncrement2Props {
  increment: () => void;
}

const ShowIncrement2 = memo(({increment}: ShowIncrement2Props) => {

  console.log('Render ShowIncrement2');

  return (
    <button onClick={() => increment()}>
      Sumar
    </button>
  )
});

export default ShowIncrement2;