import React, {useEffect, useContext} from 'react';
import Product from '../Product/Product';
import CartContext from '../../Context/CartContext/CartContext';
import './Cart.css';

function Cart(props) {
// Content
//   const { } = useContext(CartContext)
//   useEffect(() => {
//     getItems() 
// }, [])






  const {products, onAdd} = props; 
  return (
<main className="cart-title">
<h2>Todos los productos</h2>
<div className="grid">
<div className="filter-box-top">ACA VAN LOS FILTROS</div>
<div className="filter-box-aside grid_col--3">ACÁ VAN LOS FILTROS</div>
<div className="product-list grid_col--9">
  {products.map((product) => (
    <Product onAdd={onAdd} key={product.id} product={product}></Product>
    
  ))}

</div>
</div>
</main>
  )
}

export default Cart;