import React from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
function ItemDetail( props ){
    const {id} = useParams()
    const {item} = props;
    return(
        <section className="section row">
            <div className="grid">
            {console.log(item)}
            <img className="product__image" src={item.imagen} alt={`imagen-de-producto ${item.id}`}/>
            <div className="product__details">
                <span className="product__tag"> {item.tipo} </span>
                <div className="product__name product__title">{item.nombre}</div>
                <div className="product__info"> {item.descripcion} </div>
                <div className="product__price">{`$ ${item.precio}`}</div>
                <div className="grid--bottom">
                    <div className="contador-container">
                </div>
                 <span>Cantidad</span>
            </div>
            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${item.id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${item.id}`}></img>
                </div>
            </div>
        </section>
    )}

export default ItemDetail