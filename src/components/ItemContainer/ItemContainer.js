
import {data} from '../../data/productos/Data';
import React /*{useContext}*/ from 'react';
import Item from '../Item/Item';
import './ItemContainer.css';

const ItemContainer = () => {
    /** MY FILTERS  **/
    const myFilter0 = data.filter((x) => x.tipo === "Mate");
    const myFilter1 = data.filter((x) => x.tipo === "Combo");
    const myFilter2 = data.filter((x) => x.tipo === "GiftBox");
return(
<main className="itemcontainer container-fluid">

{/*MY FIRST MAP*/}
    {/*Title Container*/}
    <div className="title title-container">
        <h2 className="title-main-title">La Tienda de Mates</h2>
        <h2 className="subtitle">Productos destacados</h2>
        </div>
        <div className="top-products container-fluid">
        {myFilter0.map((x) =>
        <div className="product" key={x.id}>
        <Item nombre={x.nombre} precio={x.precio} img={x.imagen} info={x.descripcion} id={x.id}></Item>
        </div>)}
    </div>

{/*MY SECOND MAP*/}
    {/*Title Container*/}
    <div className="title title-container">
        <h2 className="title-main-title">La Tienda de Mates</h2>
        <h2 className="subtitle">Combos destacados</h2>
        </div>
        <div className="combos-products container-fluid">
        {myFilter1.map((x) =>
        <div className="product" key={x.id}>
        <Item nombre={x.nombre} precio={x.precio} img={x.imagen} info={x.descripcion} id={x.id}>  </Item>
        </div>)}
    </div>

{/*MY THIRD MAP*/}
    {/*Title Container*/}
    <div className="title title-container">
        <h2 className="title-main-title">La Tienda de Mates</h2>
        <h2 className="subtitle">GifBox destacados</h2>
        </div>
        <div className="giftbox-products container-fluid">
        {myFilter2.map((x) =>
        <div className="product" key={x.id}>
        <Item x={x} nombre={x.nombre} precio={x.precio} img={x.imagen} info={x.descripcion} id={x.id}/>
        </div>)}
    </div>
</main>
    )}
export default ItemContainer;