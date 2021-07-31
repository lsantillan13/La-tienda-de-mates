import React from 'react';
import './ItemDetail.css';


function ItemDetailContainer( props ){
    
    const {item} = props;
/*  import { useParams } from 'react-router';
    const {id} = useParams()
    const filtrado = data.products.filter(n => n.tipo.includes('Mate'));
    const filtrado1 = data.products.filter(n => n.tipo.includes('Combo'));
    const filtrado2 = data.products.filter(n => n.tipo.includes('Giftbox'));
    console.log(filtrado)
*/
    return(
    <>
        {/* {filtrado.map((x) => <div>{x.id === id && <ItemDetail x={x}></ItemDetail>}</div>)} */}
    <ItemDetail item={item}/>
    </>
    )}
export {ItemDetailContainer}


function ItemDetail ( props ) {
    const {item} = props;
    // const {x} = props;
    return (
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

            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${item.id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${item.id}`}></img>
                </div>
        </main>

        /*
          <main className="section container-fluid">
            <div className="product__image-container">
                <img className="product__image" src={x.imagen} alt={`imagen-de-producto ${x.id}`}/>
            </div>
            <div className="product__details">
                <span className="product__tag"> {x.tipo} </span>
                <div className="product__name product__title">{x.nombre}</div>
                <div className="product__info"> {x.descripcion} </div>
                <div className="product__price">{`$ ${x.precio}`}</div>
                <div className="grid--bottom">
                    <div className="contador-container">
                </div>
                 <span>Cantidad</span>
            </div>

            <button className="Item-detail-add-to-cart">Añadir al Carrito</button>
                </div>
                <div className="slider-image">
                    <img className="slider-image-img" alt={`imagen-de-producto ${x.id}`}></img>
                    <img className="slider-image-img"  alt={`imagen-de-producto ${x.id}`}></img>
                </div>
        </main>
        */

    )
}

export {ItemDetail}

