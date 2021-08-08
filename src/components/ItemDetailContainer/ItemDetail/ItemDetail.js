import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import Counter from '../../Counter/Counter';
import { CartContext } from '../../../Context/CartContext/CartContext';

function ItemDetailContainer( props ){
    const {item} = props;
    const nombre = item.nombre;
    const precio = item.precio;
    return(
    <>
    <ItemDetail item={item} xid={item.id} nombre={nombre} precio={precio}/>
    </>
    )}
export {ItemDetailContainer}
/*      &&&&&&&     */
function ItemDetail ( props ) {
    const [count, setCount] = useState(1);
    const [finished, setFinished] = useState(false);
    const handleState = () => setFinished(!finished);
    const {item, nombre, xid, id} = props;
    const {agregarAlCarrito, eliminarProducto, clearCart} = useContext(CartContext);
    const handleAñadir = () => {
        agregarAlCarrito({
            "item": `Nombre: ${nombre}, Id: ${xid}`,
            "cantidad": `${count}`,
    })}
    const handleEliminar = () => {
        eliminarProducto(id)
    }
    return (
        <main className="section container-fluid">
            <div className="product__image-container">
                <img className="product__image" src={item.imagen} alt={`imagen-de-producto ${item.id}`}/>
            </div>
            <div className="product__details">
                <span className="product__tag"> {item.tipo} </span>
                <div className="product__name product__title">{item.nombre}</div>
                <div className="product__info"> {item.descripcion} </div>
                <div className="product__price">{`$ ${item.precio}`}</div>
                <div className="grid--bottom">
                    <div className="contador-container">
                </div>
                <button onClick={handleEliminar}>Eliminar Item</button>
                <button className="empty-chart" onClick={clearCart}>Vaciar carrito</button>
                 <span>Cantidad</span>
            </div>
            <div className="counter">
            {!finished ? (<>
            <Counter initial={1} count={count} setCount={setCount} stock={item.stock}/> <button className="finish-buy" onClick={handleState}> Comprar</button>
            </>
             ):(
                 <>
                <Link to="/Cart" onClick={handleState}>
                <button onClick={handleState, handleAñadir} className="finish-buy finish">Terminar compra</button>
                </Link>
                <button onClick={handleState} className="finish-buy modify">Modificar</button>
                
                </>
             ) 
            }
            </div>
            <button className="Item-detail-add-to-cart visible">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${item.id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${item.id}`}></img>
                </div>
        </main>
    )
}

export {ItemDetail}

