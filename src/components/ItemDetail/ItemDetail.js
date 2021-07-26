import React from 'react';
import './ItemDetail.css';
import Contador from '../Contador/Contador'
import { useParams } from 'react-router-dom';
import ItemList from '../../data/productos/itemlist.json'
function ItemDetail(){
    /* DETALLE DE PRODUCTO*/ 

        // console.log(useParams())
        // const {id} = useParams()
    return(
        <section className="section">
            {ItemList.MateList.map(MappedItem =>
            <div className="grid" key={MappedItem.id}>
                   <img className="product__image" src={MappedItem.imagen} alt={"imagen-de-producto" + MappedItem.id}/>
            <div className="product__details">
                <span className="product__tag"> {MappedItem.tipo} </span>
                <div className="product__name product__title">{MappedItem.nombre}</div>
                <div className="product__info">{MappedItem.descripcion}</div>
                <div className="product__price">{'$' + MappedItem.precio}</div>
                <div className="grid--bottom">
                    <div className="contador-container">
                <Contador/>
                </div>
                 <span>Cantidad</span>
            </div>
            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" src={MappedItem.sliderimagen} alt={"imagen-de-producto" + MappedItem.id}></img>
                    <img className="slider-image-img" src={MappedItem.sliderimagen} alt={"imagen-de-producto" + MappedItem.id}></img>
                </div>
            </div>
                )}
        </section>
        
    )}

export default ItemDetail