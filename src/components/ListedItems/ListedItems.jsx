import React from 'react';
import './ListedItems.css'
import productos from '../../data/productos'
const ListedItems = ( {props, children} ) => {   
    return (
    <section className="section-top-products container-fluid">
    <div className="top-products container-fluid">
        {productos.map(pro => <div className="product" key={pro.id}>
        <div className="product--wishlist"/>
        <a href={pro.tipo + '/' + pro.forma + '/' + pro.id} className="product-link">
            <div className="product--image-placeholder">
            <img className="product--image" src={pro.imagen} alt={'imagen-de-mate-producto-' + pro.id}/>
            </div>
        </a><div className="product--details">
        <div className="product--name"> {pro.nombre} </div>
        <div className="product--info"> {pro.descripcion}</div>
        <div className="product--price">{'$' + pro.precio}</div>
        <button className="add-to-cart">Añadir al Carrito</button>
        </div>
        </div>
        )}
    </div>
    </section>

    )
}


export default ListedItems;