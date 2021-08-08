import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import NavBar from '../../components/Navbar/navBar';
import './Test.css'
const Test = () => {
    const {carrito, eliminarProducto} = useContext(CartContext);
    return (
        <main>
        <NavBar/>
        <section className="shoppingcart container-fluid">
            <h2>1. Shopping Cart</h2>
        {carrito.map((x) => <div className="product-on-cart"> <h4>{x.item}</h4> <button onClick={() => eliminarProducto}>Eliminar Item</button> </div>)}
        </section>
        </main>
    )
}
export default Test;