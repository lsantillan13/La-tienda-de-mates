import React from 'react';
import { Link } from 'react-router-dom';
import ArrayCombos from '../../data/productos/itemlist.json'

export default function Combos ( props ) {
    const {onAdd} = props;
    return (
    /*MAIN SECTION FOR ENTIRE COMPONENT*/
    <section className="section-combos container-fluid" style={{position: 'relative', top: '75vh'}}>
        {/*TITLE CONTAINER*/}    
        <div className="title title-container">
            <h2 className="title-main-title">La Tienda de Mates</h2>
            <h2 className="subtitle"> combos destacados</h2>
        </div>
        {/* MAIN DIV FOR ITEM COLLECTION*/}
        <div className="top-products container-fluid">
        {/* ARRAY MAP*/}
        {ArrayCombos.ComboList.map(combo => 
        <div className="product" key={combo.id}>
        <div className="Product--wishlist"/>
        <Link to={`Productos/${combo.tipo}/${combo.id}`}>
        <div className="product--image-placeholder">
        <img className="product--image" src={combo.imagen} alt=""></img>
        </div>
        </Link>
        {/* Item Details*/}
        <div className="product--details">
        <div className="product--name"> {combo.nombre}</div>
        <div className="product--info">{combo.descripcion}</div>
        <div className="product--price">{combo.precio}</div>
        <button onClick={onAdd} className="add-to-cart">Añadir al Carrito</button>
        </div>

        </div>
        )}
        {/*SHOULD CLOSE ARRAY MAP HERE*/}
        </div>
    </section>)}