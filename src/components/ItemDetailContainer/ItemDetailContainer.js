import React from 'react';
import { useParams } from 'react-router';
import {ItemDetailContainer} from './ItemDetail/ItemDetail';
import {data} from '../../data/productos/Data';
import NavBar from '../Navbar/navBar';
import Footer from '../Footer/Footer';

function ItemDetailMain( props ){
    const {id} = useParams()
    return(
    <main>
        <NavBar/>
        {data.map((item) => item.id === id && <ItemDetailContainer item={item}/>)}
        <Footer/>
    </main>      
    )}

export default ItemDetailMain;