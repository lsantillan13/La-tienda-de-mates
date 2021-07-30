import React from 'react'
import Product from '../Product/Product'

export default function Cart(props) {
  const {products, onAdd} = props; 
  return (
<main className="block col-2" style={{position: 'relative', top: '150px', width: '100%', height: '100%', background: '#fff'}}>
<h2>Todos los productos</h2>
<div className="row">
  {products.map((product) => (
    <Product onAdd={onAdd} key={product.id} product={product}></Product>
  ))}

</div>
</main>
  )
}