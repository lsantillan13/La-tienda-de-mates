import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';


const Item = ({nombre, info, id, precio, img}) => {
    const [count] = useState(1);
    const {agregarAlCarrito} = useContext(CartContext);
    const handleAgregar = () => {
        agregarAlCarrito({
            "item": `Nombre: ${nombre}, Id: ${id}`,
            "cantidad": `${count}`,
    })}
    return (
        <>
        <div className="product--wishlist"/>
        <Link to={`Item/${id}`}>
        <div className="product--image-placeholder">
        <img className="product--image" src={img} alt={'imagen-de-mate-producto-' + id}/>
        </div>
        </Link>
        {/* Item Details */}
        <div className="product--details">
        <div className="product--name"> {nombre} </div>
        <div className="product--info"> {info}</div>
        <div className="product--price">{'$' + precio}</div>
        <button onClick={handleAgregar} className="add-to-cart">Añadir al Carrito</button>
        </div>
        </>
    )
}




export default Item