import React from 'react';
import './ItemDetail.css';
import Contador from '../Contador/Contador'
import { useParams } from 'react-router-dom';
// import ItemList from '../../data/productos/itemlist.json'
import myArr from '../../data/productos/myArr.json'
function ItemDetail( props ){
    
    const {id} = useParams()

        const Productz = myArr.Products
    return(
        <section className="section">
            <div className="grid">
            <img className="product__image" src={Productz[id].imagen} alt={`imagen-de-producto ${Productz[id].id}`}/>
            <div className="product__details">
                <span className="product__tag"> {Productz[id].tipo} </span>
                <div className="product__name product__title">{Productz[id].nombre}</div>
                <div className="product__info"> {Productz[id].descripcion} </div>
                <div className="product__price">{`$ ${Productz[id].precio}`}</div>
                <div className="grid--bottom">
                    <div className="contador-container">
                <Contador/>
                </div>
                 <span>Cantidad</span>
            </div>
            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${Productz[id].id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${Productz[id].id}`}></img>
                </div>
            </div>
        </section>
    )}

export default ItemDetail