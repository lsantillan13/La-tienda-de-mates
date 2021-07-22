import React from 'react';
import './ListedItems.css'
import Productos from '../../data/productos'
const ListedItems = ( {props, children} ) => {   
    return (
    <section className="section-top-products container-fluid">
    <div className="top-products container-fluid">
        {Productos.map(Pro => <div className="product" key={Pro.id}>
        <div className="product--wishlist"/>
        <a href={Pro.tipo + '/' + Pro.forma + '/' + Pro.id} className="product-link">
            <div className="product--image-placeholder">
            <img className="product--image" src={Pro.imagen} alt={'imagen-de-mate-producto-' + Pro.id}/>
            </div>
        </a><div className="product--details">
        <div className="product--name"> {Pro.nombre} </div>
        <div className="product--info"> {Pro.descripcion}</div>
        <div className="product--price">{'$' + Pro.precio}</div>
        <button className="add-to-cart">Añadir al Carrito</button>
        </div>
        </div>
        )}
    </div>
    </section>

    )
}


export default ListedItems;