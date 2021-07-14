import React from 'react';
import ListedItems from '../ListedItems/ListedItems';
import './TopProducts.css'



export default function TopProducts( ){

return(
<section>
    <div className="title title-container" style={{background: '#fff'}}>
            <h1 className="title-main-title">La Tienda de Mates</h1>
        <h2 className="subtitle">Productos destacados</h2>
    </div>
    <ListedItems/>
    </section>)
}