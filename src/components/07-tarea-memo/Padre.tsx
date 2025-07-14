import { useCallback, useState } from 'react';
import { Hijo } from './Hijo';

export const Padre = (): JSX.Element => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    //* Se utiliza useCallback para memorizar funciones, en este caso la función incrementar
    const incrementar = useCallback(( num: number ) => {
        setValor( prev => prev + num);
    }, []);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( numero => (
                    <Hijo 
                        key={ numero }
                        numero={ numero }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
