import { memo } from 'react';
import type { Dispatch } from 'react';

interface ShowIncrementProps {
  increment: Dispatch<React.SetStateAction<number>>;
}

const ShowIncrement = memo(({ increment }: ShowIncrementProps) => {
  console.log('Render ShowIncrement');
  return (
    <button onClick={() => increment((prev) => prev + 1)}>
      Incrementar
    </button>
  )
});

export default ShowIncrement;