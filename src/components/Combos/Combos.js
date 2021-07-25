import React from 'react';
import image0 from '../../assets/img/products/combo0.jpg';
import image1 from '../../assets/img/products/combo1.jpg';
import image2 from '../../assets/img/products/combo2.jpg';
import image3 from '../../assets/img/products/combo3.jpg';

const ComboMix = [
    {id: 0,
    tipo: 'Combo',
    forma: null,
    nombre: "Combo 1",
    descripcion: "Combo",
    precio: 3000,
    imagen: image0},
    {id: 1,
    tipo: 'Combo',
    forma: null,
    nombre: "Combo 2",
    descripcion: "Combo",
    precio: 3000,
    imagen: image1},
    {id: 2,
    tipo: 'Combo',
    forma: null,
    nombre: "Combo 3",
    descripcion: "Combo",
    precio: 3000,
    imagen: image2},
    {id: 3,
    tipo: 'Combo',
    forma: null,
    nombre: "Combo 3",
    descripcion: "Combo",
    precio: 3000,
    imagen: image3}]

export default function Combos () {
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
        {ComboMix.map(combo => 
        <div className="product" key={combo.id}>
        <div className="Product--wishlist"/>
        <a href="/">
        <div className="product--image-placeholder">
        <img className="product--image" src={combo.imagen} alt=""></img>
        </div>
        </a>
        {/* Item Details*/}
        <div className="product--details">
        <div className="product--name"> {combo.nombre}</div>
        <div className="product--info">{combo.descripcion}</div>
        <div className="product--price">{combo.precio}</div>
        <button className="add-to-cart">Añadir al Carrito</button>
        </div>

        </div>
        )}
        {/*SHOULD CLOSE ARRAY MAP HERE*/}
        </div>
    </section>)}