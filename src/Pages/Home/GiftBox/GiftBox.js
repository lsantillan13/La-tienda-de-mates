import React from 'react';
import { Link } from 'react-router-dom';
import './GiftBox.css';
import ArrayGiftBox from '../../../data/productos/itemlist.json';
/*CAMBIAR ARRAY COMBOS POR /DATA Y CREAR FILTER PARA GIFTBOX */

function GiftBox () {
    return (
    /*MAIN SECTION FOR ENTIRE COMPONENT*/
    <section className="section-giftbox container-fluid">
        {/*TITLE CONTAINER*/}    
        <div className="title title-container">
            <h2 className="title-main-title">La Tienda de Mates</h2>
            <h2 className="subtitle"> GiftBox Destacadas</h2>
        </div>
        {/* MAIN DIV FOR ITEM COLLECTION*/}
        <div className="top-products container-fluid">
        {/* ARRAY MAP*/}
        {ArrayGiftBox.GiftBoxList.map(gift => 
        <div className="product" key={gift.id}>
        <div className="Product--wishlist"/>
        <Link to={`Item/${gift.id}`}>
        <div className="product--image-placeholder">
        <img className="product--image" src={gift.imagen} alt=""></img>
        </div>
        </Link>
        {/* Item Details*/}
        <div className="product--details">
        <div className="product--name"> {gift.nombre}</div>
        <div className="product--info">{gift.descripcion}</div>
        <div className="product--price"> {'$' + gift.precio}</div>
        <button className="add-to-cart">Añadir al Carrito</button>
        </div>
        
        </div>
        )}
        </div>
    </section>)}

export default GiftBox;