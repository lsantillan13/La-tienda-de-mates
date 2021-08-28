import React from 'react';
import NavBar from '../../components/Navbar/navBar';
import { database } from '../../Firebase/Firebase';
import Item from '../../components/Item/Item';
import "./Products.css"
const Products = () => {     

const [verProductos, setVerProductos] = React.useState([]);
    React.useEffect(() =>{
    const productos = database.collection("mates")
    productos.get().then((query) =>
        setVerProductos(
            query.docs.map((doc) => {
                return {...doc.data(), id: doc.id};
            })
        )
    );
});

return (
    <main>
    <NavBar/>
    <div className="title title-container Products">
        <h2 className="title-main-title">La Tienda de Mates</h2>
        <h2 className="subtitle">Todos los Productos</h2>
    </div>
{verProductos.map((x) =>
    <section className="item-container">
        <div className="product" key={x.id}>
            HOLA
            <Item nombre={x.name} info={x.description} img={x.img} precio={x.price}/>
        </div>
    </section>)}
    </main>
    )
}


export default Products;