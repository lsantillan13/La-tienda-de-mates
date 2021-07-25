
import React from 'react';
import './TopProducts.css'
import Productos from '../../data/productos'
const TopProducts = ( { children} ) => {   
    return (
    <section className="section-top-products container-fluid">
            {/* Title Container */}
            <div className="title title-container">
            <h2 className="title-main-title">La Tienda de Mates</h2>
            <h2 className="subtitle">Productos destacados</h2>
            </div>
            {/* Main DIV For Item Collection*/}
    <div className="top-products container-fluid">
            {/* Array Map */}
            {Productos.map(Pro => 
            <div className="product" key={Pro.id}>
            <div className="product--wishlist"/>
            <a href="/detalle-productos" className="product-link">
            <div className="product--image-placeholder">
            <img className="product--image" src={Pro.imagen} alt={'imagen-de-mate-producto-' + Pro.id}/>
            </div>
            </a>
            {/* Item Details */}
            <div className="product--details">
            <div className="product--name"> {Pro.nombre} </div>
            <div className="product--info"> {Pro.descripcion}</div>
            <div className="product--price">{'$' + Pro.precio}</div>
            <button className="add-to-cart">Añadir al Carrito</button>
            </div>
            </div>
            )}
    </div>

    </section>)}


export default TopProducts;