
import React from 'react';
import { Link } from 'react-router-dom';
import './TopProducts.css'
import ArrayMates from '../../../data/productos/itemlist.json';

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
            {ArrayMates.MateList.map(mappedMate => 
            <div className="product" key={mappedMate.id}>
            <div className="product--wishlist"/>
            <Link to={`Productos/${mappedMate.tipo}/${mappedMate.id}`}>
            <div className="product--image-placeholder">
            <img className="product--image" src={mappedMate.imagen} alt={'imagen-de-mate-producto-' + mappedMate.id}/>
            </div>
            </Link>
            {/* Item Details */}
            <div className="product--details">
            <div className="product--name"> {mappedMate.nombre} </div>
            <div className="product--info"> {mappedMate.descripcion}</div>
            <div className="product--price">{'$' + mappedMate.precio}</div>
            {/*ACA TENGO QUE HACER UNA FUNCION PARA AÑADIR AL CARRO Y/O NEW TAB AL CARRITO*/}
            <button className="add-to-cart">Añadir al Carrito</button>
            </div>
            </div>
            )}
    </div>

    </section>)}


export default TopProducts;