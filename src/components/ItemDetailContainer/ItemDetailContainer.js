import React from 'react';
import { useParams } from 'react-router';
/*CHILD COMPONENT*/
import ItemDetail from '../ItemDetail/ItemDetail';
/*ARRAY*/
import data from '../../data/productos/Data';
/*STYLING*/
import './itemDetailContainer.css'
export default function ItemDetailContainer( props ){
    const {id} = useParams()
    return(
    <main >
        {data.products.map((item) => item.id === id && <ItemDetail item={item}/>)}
    </main>      
    )}