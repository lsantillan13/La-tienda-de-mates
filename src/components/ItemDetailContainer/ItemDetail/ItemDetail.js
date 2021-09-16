import React from 'react';
import './ItemDetail.css';
import { ItemDetail } from './ItemDetalle';

function ItemDetailContainer( props ){
    const {item} = props;
    const nombre = item.name;
    const precio = item.price;
    const imagen = item.img;
    const stock = item.stock;
    return(
    <>
    <ItemDetail item={item} xid={item.id} nombre={nombre} precio={precio} imagen={imagen} stock={stock}/>
    </>
    )}
export {ItemDetailContainer}


