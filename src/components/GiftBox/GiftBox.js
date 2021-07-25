import React from 'react';
import './GiftBox.css';
import image0 from '../../assets/img/products/giftbox0.jpg';
import image1 from '../../assets/img/products/giftbox1.jpg';
import image2 from '../../assets/img/products/giftbox2.jpg';
import image3 from '../../assets/img/products/giftbox3.jpg';


const giftbox =[
    {id: 7,
    tipo: "GiftBox",
    forma: null,
    nombre: "GiftBox 1",
    descripcion: "Combo con cosas",
    precio: 2000,
    imagen: image0},
    {id: 8,
    tipo: "GiftBox",
    forma: null,
    nombre: "Giftbox 2",
    descripcion: "Combo con cosas",
    precio: 2000,
    imagen: image1},
    {id: 9,
    tipo: "GiftBox",
    forma: null,
    nombre: "Giftbox 3",
    descripcion: "Combo con cosas",
    precio: 2000,
    imagen: image2},
    {id: 4,
    tipo: "GiftBox 4",
    forma: null,
    nombre: "GiftBox 4",
    descripcion: "Combo con cosas",
    precio: 2000,
    imagen: image3}]

export default function GiftBox () {
    return (
    /*MAIN SECTION FOR ENTIRE COMPONENT*/
    <section className="section-combos container-fluid" style={{position: 'relative', top: '100vh'}}>
        {/*TITLE CONTAINER*/}    
        <div className="title title-container">
            <h2 className="title-main-title">La Tienda de Mates</h2>
            <h2 className="subtitle"> GiftBox Destacadas</h2>
        </div>
        {/* MAIN DIV FOR ITEM COLLECTION*/}
        <div className="top-products container-fluid">
        {/* ARRAY MAP*/}
        {giftbox.map(gift => 
        <div className="product" key={gift.id}>
        <div className="Product--wishlist"/>
        <a href="/">
        <div className="product--image-placeholder">
        <img className="product--image" src={gift.imagen} alt=""></img>
        </div>
        </a>
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
