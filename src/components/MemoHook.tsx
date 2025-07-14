import { useMemo, useState } from "react";
import type { MouseEventHandler } from "react";

interface OrdersProps {
  items: string[];
  total: number;
}

// interface HeavyStockProps {
//   quantity?: number;
// }

// const heavyStock = ({quantity = 100}:HeavyStockProps):string => {
//   for (let index = 0; index < quantity; index++){
//     console.log('Cargando stock...');
//   }
//   return `${quantity} Iteracciones realizadas`;
// }

const UseMemo = () => {
  const [count, setCount] = useState<number>(4000);
  const [orders, setOrders] = useState<OrdersProps>({
    items: [],
    total: 0
  });

  //* Se utiliza useMemo para memorizar el resultado de una función costosa
  //* y evitar que se ejecute nuevamente si no ha cambiado el valor de count
  // const memorizedValue = useMemo(() => heavyStock({quantity: count}), [count]);
  const memorizedValue = useMemo(() => {
    for (let index = 0; index < count; index++){
      console.log('Cargando stock...');
    }
    return `${count} Iteracciones realizadas`; 
  }, [count]);

  const addCounter:MouseEventHandler<HTMLButtonElement> | undefined = ():void => {
    console.log('Counter');
    setCount(count + 1);
  }

  const handleOrder:MouseEventHandler<HTMLButtonElement> | undefined = ():void => {
    setOrders((prev) => ({
      ...prev,
      items: [...prev.items, `Item ${prev.items.length + 1}`],
      total: prev.total + 1
    }))
  }


  return (
    <div>
      <h1>useMemo</h1>
      <hr />
      <h2>Count: {count}</h2>
      <h2>Total: {orders.total}</h2>

      <p>{memorizedValue}</p>

      <button onClick={addCounter}>Incrementar el contador</button>
      <button onClick={handleOrder}>Agregar item a la orden</button>
    </div>
  )
}

export default UseMemo;