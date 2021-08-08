import React, {useContext} from 'react';
import './CarWidget.css';
import { CartContext } from '../../Context/CartContext/CartContext';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
return (
    <>
    {cantidadCarrito(0) ? <p className="cart-widget-ammount">{cantidadCarrito()}</p> : null}
    </>
)
}

export default CartWidget;