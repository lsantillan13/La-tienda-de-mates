import React from 'react';
import './ItemDetail.css';
function ItemDetail( props ){
    const {item} = props;
    return(
        
        <main className="section container-fluid">
            <div className="product__image-container">
                <img className="product__image" src={item.imagen} alt={`imagen-de-producto ${item.id}`}/>
            </div>
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
            {/*aca el counter*/}
            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${item.id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${item.id}`}></img>
                </div>
        </main>
    )}

export default ItemDetail