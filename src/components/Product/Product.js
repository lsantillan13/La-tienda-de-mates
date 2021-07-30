import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img style={{position: 'relative', background: 'green', width: '200px', height: '200px'}} className="small" src={product.imagen} alt={product.nombre}></img>
            <h3>{product.nombre}</h3>
            <div>${product.precio}</div>
            <div>
                <button onClick={() =>onAdd(product)}> Add To Cart</button>
            </div>
        </div>
    )
}
