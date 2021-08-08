import React from 'react';
import { data } from '../../data/productos/Data';
import Product from '../Product/Product'
import './Cart.css';

function Cart(props) {
  const {onAdd} = props; 
  return (
<main className="cart-title">
<h2>Todos los productos</h2>
<div className="grid">
<div className="filter-box-top">ACA VAN LOS FILTROS</div>
<div className="filter-box-aside grid_col--3">ACÁ VAN LOS FILTROS</div>
<div className="product-list grid_col--9">
  {data.map((product) => (
    <Product onAdd={onAdd} key={product.id} product={product}></Product>
  ))}

</div>
</div>
</main>
  )
}

export default Cart;