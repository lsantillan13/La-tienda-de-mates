import React, { useState } from 'react';
import './ItemDetail.css';
import Contador from '../Contador/Contador'
import { useParams } from 'react-router-dom';
import ItemList from '../../data/productos/itemlist.json'
function ItemDetail(){
    const [ productos, setProductos ] = React.useState([])
    React.useEffect(() => {
        obtenerDatos()
        
    },[])
    
        const {id} = useParams()
        function obtenerDatos() {
        const Productz = ItemList
        const Mates = ItemList.MateList
        const Combos = ItemList.ComboList
        const Gift = ItemList.GiftBoxList
        setProductos(Mates)

        const stringed = JSON.stringify(ItemList)
    }
    return(
        <main>
        
            <div style={{position: 'relative', top: '300px'}}>
            { id === '0' ? <div> hola </div> : <div> chau </div>}
            
            </div>

        <section className="section">
            {/* {ItemList.MateList.map(MappedItem =>
            <div className="grid" key={MappedItem.id === "0"}>
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
                )} */}
        </section>
        </main>
    )}

export default ItemDetail