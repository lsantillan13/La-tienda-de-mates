import React, {useState} from 'react';
import './Contador.css';

export default function Contador () {
    const [ArrayNumero ] = useState([1])
    const [numero, setNumero] = useState(1)
    const Agregar = () => { setNumero (numero + 1)}
    const Restar = () => {setNumero (numero - 1)}
    return (
        <div className="product-ammount-count">
        <button onClick={Restar}>-</button>
        {ArrayNumero.map((Item, ArrayNumero) =>
        <p key="">{numero}</p>)}
        <button onClick={Agregar}>+</button>
        </div>        
    )
}