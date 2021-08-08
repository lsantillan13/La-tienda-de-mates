import React from 'react'
import Cart from '../../components/Cart/Cart';
import CartView from '../../components/Basket/Basket';
import {data} from '../../data/productos/Data';
import NavBar from '../../components/Navbar/navBar'
import './index.css';
/**CONTEXT**/
// import CartContext from '../../Context/CartContext/CartContext';

export default function ProductsContainer() {
  const {products} = data;
  const [cartItems, setCartItems] = React.useState([]);     
  /*AÑADIR AL CARRITO*/
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));}
    else{setCartItems([...cartItems, {...product, qty: 1}])}}
    const onRemove = ( product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1){ setCartItems(cartItems.filter((x) => x.id !== product.id))}
      else{setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))}}
return (
<main className="Allprods-main container-fluid">
  <NavBar></NavBar>
  <section className="product-list-container">
  {/* <CartContext/><CartContext/> */}
    <Cart onAdd={onAdd} products={products}/>

  </section>
  <CartView style={{position: 'relative'}} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>  

</main>)}
