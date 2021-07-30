import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/navBar';
import Cart  from './components/Cart/Cart';
// import Login from "./components/Login/Login";
/* SECTIONS COMPONENTS*/
import Combos from './components/Combos/Combos';
import GiftBox from './components/GiftBox/GiftBox';
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Footer from './components/Footer/Footer'
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
/**/
import data from './data/productos/Data.js';
import Basket from './components/Basket/Basket';
import productoDetalle from './components/ItemDetailContainer/ItemDetailContainer';
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
      else{setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))}
    }


  return (
  <Router>
    <main className="App container-fluid">
      <Route path="/" exact>  
        <section className="my-hero-container container-fluid">
          <div className="my-hero container-fluid"/>
        </section>
        <NavBar/>
        <div className="row">
      {/* <Cart onAdd={onAdd} products={products}></Cart>
      <Basket style={{position: 'relative'}} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}>  </Basket> */}
      </div>
        <TopProducts />
        {/* <ItemDetail/> */}
        <Combos/>

        <GiftBox/>
        {/* <Footer/> */}
      </Route>

    {/*MATES*/}
    <Switch>
      <Route path="/Productos/Mate/:id">
      <NavBar/><ItemDetailContainer/><Footer/>
      </Route>
    </Switch>
    {/*COMBOS*/}
    <Switch>
      <Route path="/Productos/Combo/:id">
        <NavBar/><ItemDetailContainer/><Footer/>
      </Route>
    </Switch>
    {/*GIFTBOX*/}
    <Switch>
      <Route path="/Productos/GiftBox/:id">
        <NavBar/><ItemDetailContainer/><Footer/>
      </Route>
    </Switch>

    <Switch>
      <Route path="/Productos/Todo" exact>
      <NavBar/>

      </Route>
    </Switch>


    </main>
  </Router>    
    )}


export default App;


/* CartItems={CartItems} open={isOpen} onClose={() => { setIsOpen(false)}} */