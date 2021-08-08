import React,{useContext} from 'react';
import { CartViewContext } from '../../Context/CartView Context/CartViewContext';
import './Basket.css';

function CartView (props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) =>  a + c.precio * c.qty, 0);
    const {setIsOpen, isOpen} = useContext(CartViewContext)
    // const taxPrice = itemsPrice * 0.21;
    // const shippingPrice = itemsPrice > 2000 ? 0: 50;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
    if(!isOpen) return null
    return (
        <aside className="Cart-Container">
            <div className="Cart-view-popup-top">
            <p style={{position: 'relative'}}><strong>En tu carrito (0)</strong></p>
            <button className="close-popup" onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="Cart-view-status">
                {cartItems.length === 0 && <div className="empty-img"><img src="https://th.bing.com/th/id/OIP.pdR1EBlUfZE2_dt2EIX6VgHaGw?pid=ImgDet&rs=1" alt="imagen-carrito-vacio"/></div>}
            </div>
            {cartItems.map((item) => (
                <div className="Cart-view-item-container" key={item.id}>
                    <div className='Cart-view-item-name'>{item.nombre}</div>
                    <div className="Cart-view-img-container"><img src={item.imagen} alt={item.nombre}/></div>
                    
                    <div className="Cart-view-buttons">
                        <button onClick={() =>onAdd(item)} className="add">+</button>
                        <button onClick={() =>onRemove(item)} className="decrease">-</button>
                    </div>
                    <hr className="line"></hr>
                    <div className="cart-view-price">
                        <p>{item.qty} x ${item.precio.toFixed(2)}</p>
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 &&(
                <div className="Cart-view-prices">
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
                    <div className="row "> 
                    <div className="col-6"><strong>Total Price</strong></div>
                    {/* <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div> */}
                    <div className="col-1 text-right"><strong>${itemsPrice.toFixed(2)}</strong></div>
                    <button className="cart-add-to-cart">Ver pedido</button>
                    </div>
                    
                </div>
            )}
        </aside>
    )
}

export default CartView;