import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
/**/
import Basket from './components/Basket/Basket';
import {data} from './data/productos/Data.js';
import Default  from './Pages/Default/Default';
import ItemDetailMain from './components/ItemDetailContainer/ItemDetailContainer';
import {MatesContainer} from './Pages/Productos/Mates'
/**/
// import Cart  from './components/Cart/Cart';
// import Login from "./components/Login/Login";
// import {MyCount} from './components/Contador/Contador';
function App() { 
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
  <div className="App">
      {/* MY APP COMPONENT */}
  <Switch>
    <Route exact path="/" component={Default}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/category/:categoryId" component={MatesContainer}/> 
  </Switch>













  </div>)}
export default App;


/* CartItems={CartItems} open={isOpen} onClose={() => { setIsOpen(false)}} */