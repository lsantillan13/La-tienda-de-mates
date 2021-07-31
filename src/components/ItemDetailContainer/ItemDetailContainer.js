import React from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail/ItemDetail';
import data from '../../data/productos/Data';

export default function ItemDetailContainer( props ){
    const {id} = useParams()
    return(
    <main >
        {data.products.map((item) => item.id === id && <ItemDetail item={item}/>)}
    </main>      
    )}