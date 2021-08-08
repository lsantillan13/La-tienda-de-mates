import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext/CartContext';
function Product(props) {
    const {carrito} = useContext(CartContext)
    const {product, onAdd} = props;
    return (
        <div>
            <div className="product" key={product.id}>
            <div className="product--wishlist"/>
            <Link to={`Item/${product.id}`}>
            <div className="product--image-placeholder">
            <img className="product--image" src={product.imagen} alt={'imagen-de-mate-producto-' + product.id}/>
            </div>
            </Link>
            {/* Item Details */}
            <div className="product--details">
            <div className="product--name"> {product.nombre} </div>
            <div className="product--info"> {product.descripcion}</div>
            <div className="product--price">{'$' + product.precio}</div>
            {/*ACA TENGO QUE HACER UNA FUNCION PARA AÑADIR AL CARRO Y/O NEW TAB AL CARRITO*/}
            <button onClick={() => onAdd(product)} className="add-to-cart">Añadir al Carrito</button>
            </div>
            </div>
            {/* <img style={{position: 'relative', background: 'green', width: '200px', height: '200px'}} className="small" src={product.imagen} alt={product.nombre}></img>
            <h3>{product.nombre}</h3>
            <div>${product.precio}</div>
            <div>
                <button onClick={() =>onAdd(product)}> Add To Cart</button>
            </div> */}
        </div>
    )
}
export default Product;