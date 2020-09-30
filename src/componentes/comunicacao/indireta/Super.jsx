import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('Valor')

    function quandoClicar(ValorGerado, texto) {
        setNum(ValorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};