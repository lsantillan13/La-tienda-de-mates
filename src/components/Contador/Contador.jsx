import React, {useState} from 'react';
import './Contador.css';

export default function Contador () {
    const [arrayNumero ] = useState([1])
    const [numero, setNumero] = useState(1)
    const agregar = () => { setNumero (numero + 1)}
    const restar = () => {setNumero (numero - 1)}
    return (
        <div className="product-ammount-count">
        <button onClick={restar}>-</button>
        {arrayNumero.map((item, arrayNumero) =>
        <p>{numero}</p>)}
        <button onClick={agregar}>+</button>
        </div>        
    )
}