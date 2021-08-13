
import {data} from '../../data/productos/Data';
import React /*{useContext}*/ from 'react';
import Item from '../Item/Item';
import { database } from '../../Firebase/Firebase';
import './ItemContainer.css';

const ItemContainer = () => {
    /*LLAMADO AL FIRESTORE*/
    const [productoVisible, setProductoVisible] = React.useState([]);
    const productos = database.collection("mates")
    productos.get().then((query) =>
            setProductoVisible(
                query.docs.map((doc) => {
                        return {...doc.data(), id: doc.id};
                })
            )
        );
    /*POR CATEGORIAS*/
    // const productos = database.collection("mates").where("categoría","==", categoria);
    // const categoria = "domestico";

    /** MY FILTERS  **/
    const myFilter0 = productoVisible.filter((x) => x.type === "Mate");
    const myFilter1 = productoVisible.filter((x) => x.type === "Combo");
    const myFilter2 = productoVisible.filter((x) => x.type === "Giftbox");
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
        <Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
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
        <Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
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
        <Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
        </div>)}
    </div>
</main>
    )}
export default ItemContainer;