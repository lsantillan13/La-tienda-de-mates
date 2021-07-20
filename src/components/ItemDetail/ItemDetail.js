import React from 'react';
import './ItemDetail.css';
import ImagenPrueba from "../../assets/img/products/0.jpg";
import Contador from '../Contador/Contador'
function ItemDetail(){

    const items = [
        {
        id: 0,
        tipo: "Mate personalizado",
        class: 'mate',
        nombre: "Mate luego existo",
        precio: 5000,
        imagen: ImagenPrueba,
        descripcion: 'Mate Personalizado "Mate Luego Existo"',
        sliderimagen: '../imagen-falsa'
        }
    ]
    return(
        <section className="section">
            {items.map(MappedItem =>
            <div className="grid">
                   <img className="product__image" src={MappedItem.imagen} alt={"imagen-de-producto" + MappedItem.id}/>
            <div class="product__details">
                <span class="product__tag"> {MappedItem.tipo} </span>
                <div className="product__name product__title">{MappedItem.nombre}</div>
                <div className="product__info">{MappedItem.descripcion}</div>
                <div className="product__price">{'$' + MappedItem.precio}</div>
                <div className="grid--bottom">
                    <div class="contador-container">
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