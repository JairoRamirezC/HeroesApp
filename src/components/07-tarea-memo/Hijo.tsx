import { memo } from "react";

interface HijoProps {
    numero: number;
    incrementar: (num: number) => void;
}

export const Hijo = memo(({ numero, incrementar }: HijoProps) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
