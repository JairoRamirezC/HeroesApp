import { memo } from "react";


interface FirstAppProps {
  title?: string;
  name: string;
  subTitle: string;
}

export const CounterApp = memo(({title = 'No hay titulo', name, subTitle}: FirstAppProps) => {
  // console.log(title);
  // console.log(name);
  // console.log(subTitle);

  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </div>
  )
})