import React, {useContext, useState} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import Form from '../Form/Form';
import './Cart.css';

function Cart() {

  const [cuenta, setCuenta] = useState(1);
  const {carrito, removeItem, clearCart, cantidadTotal} = useContext(CartContext);
  const cannotAnymore = 1;

  
return (
<main className="cart-title">
<section className="cart-container">
{carrito.lenght = 1 ?  <><h2>1. Shopping Cart</h2> <button onClick={() => clearCart()} className="empty">Empty Cart</button>
                 <ul className="shoppingcart-filters">
                 <li>Item</li>
                 <li>Count</li>
                 <li>Price</li>
                 </ul> </> : null}
            {carrito.length === 0 && <div className="empty-img"><img src="https://th.bing.com/th/id/OIP.pdR1EBlUfZE2_dt2EIX6VgHaGw?pid=ImgDet&rs=1" alt="imagen-carrito-vacio"/>
             <a href="/"> <button className="return-button">{`<-- Go Back Home`}</button></a>
            </div>}
            {carrito.map((item) => (
              <>
                <div className="shoppingcart-item-container" key={item.id}>
                    <div className='shopping-cart-name'><strong>{item.nombre}</strong></div>
                    <div className="shoppingcart-img-container"><img src={item.imagen} alt={item.nombre}/></div>
                    <div className="shoppingcart-buttons">
                        <button onClick={() => setCuenta(cuenta < item.stock ? cuenta + 1 : cuenta + 0)} className="add">+</button>
                        <p>{item.cantidad}</p>
                        <button onClick={() => setCuenta(cuenta >= 2 ? cuenta - 1 : cannotAnymore)} className="decrease">-</button>
                        <button onClick={() => removeItem(item)}>Delete</button>
                    </div>
                    <div className="shoppingcart-price">
                        {<p>{`${item.cantidad} x $${item.precio * item.cantidad}`}</p>}
                    </div>
                </div>
                </>
            ))}
 {carrito.length !== 0 &&(
                <div className="shoppingcart-prices">
                    {/* <div className="row"> 
                    <div className="col-6">Items Price</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div> */}
                    {/* <div className="row"> 
                    <div className="col-6">Tax Price</div>
                    <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row"> 
                    <div className="col-6">Shipping Price</div>
                    <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div> */}
                    <div className="row"> 
                    <div className="total-price"><strong>Total Price</strong></div>
                    {/* <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div> */}
                    <div className="price"><strong>${cantidadTotal()}.00</strong></div>
                    </div>
                    <div className="Form-container">
                    <Form cantidadTotal={cantidadTotal} carrito={carrito}/>
                    </div>
                </div>)}
                
        </section>
</main>
  )
}

export default Cart;