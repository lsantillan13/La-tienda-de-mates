import React from 'react';

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) =>  a + c.precio * c.qty, 0)
    const taxPrice = itemsPrice * 0.21;
    const shippingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-2"  style={{position: 'relative', left: '900px', bottom: '430vh'}}>
            <h2 style={{position: 'relative'}}>HOLA</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div>{item.nombre}</div>
                    <div>
                        <button onClick={() =>onAdd(item)} className="add">+</button>
                        <button onClick={() =>onRemove(item)} className="decrease">-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.precio.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 &&(
                <>
                    <hr></hr>
                    <div className="row"> 
                    <div className="col-6">Items Price</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row"> 
                    <div className="col-6">Tax Price</div>
                    <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row"> 
                    <div className="col-6">Shipping Price</div>
                    <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row"> 
                    <div className="col-6"><strong>Total Price</strong></div>
                    <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                </>
            )}
        </aside>
    )
}