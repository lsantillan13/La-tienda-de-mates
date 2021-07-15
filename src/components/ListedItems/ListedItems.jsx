import React from 'react';
import './ListedItems.css'
import image0 from '../../assets/img/products/0.jpg';
import image1 from '../../assets/img/products/1.jpg';
import image2 from '../../assets/img/products/2.jpg'
import image3 from '../../assets/img/products/3.jpg'


const ListedItems = ( props ) => {   
    // PRODUCTOS DESTACADOS
    const productos = [
        {id: 0,
        tipo: 'huevo',
        nombre: 'Mate luego existo',
        descripcion: 'Mate con forma de Huevo color personalizado.',
        precio: 780,
        imagen: image0},
        {id: 1,
        tipo: 'huevo',
        nombre: 'Mate Mandala',
        descripcion: 'Mate con forma de Huevo más Azucarera pintados con mandalas',
        precio: 1200,
        imagen: image1},
        {id: 2,
        tipo: 'geoide',
        nombre: 'Mate día del padre',
        descripcion: 'Mate con forma de Geoíde personalible felíz día del padre',
        precio: 780,
        imagen: image2},
        {id: 3,
        tipo: 'geoide',
        nombre: 'Mate tu primo ',
        descripcion: 'Mate con forma de Geoíde más Azucarera pintados con mandalas',
        precio: 780,
        imagen: image3}
    ]

    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            },4000);
        })
    }
getProductos().then((datos) =>  console.log(productos));

    return (
        <section className="top-products container-fluid">
          {productos.map(pro =>
            <div className="product" key={pro.id}>
            <div className="product--wishlist">
            </div>
            <div className="product--image-placeholder">
                <img className="product--image" src={pro.imagen} alt="" />
            </div>
            <div className="product--details">
            <h2 className="product--name"> {pro.nombre}</h2>
            <h2 className="product--info"> {pro.descripcion}</h2>
            <div className="product--price">  {'$' + pro.precio}</div>
            <button className="add-to-cart">Añadír al carrito</button>
            </div>
            </div>
            )}
            </section>

    )
}


export default ListedItems;