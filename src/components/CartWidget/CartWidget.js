import React, {useContext} from 'react';
import './CarWidget.css';
import { CartContext } from '../../Context/CartContext/CartContext';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
return (
    <>
    <p className="cart-widget-ammount">{cantidadCarrito()}</p>
    </>
)
}

export default CartWidget;