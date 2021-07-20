import { BrowserRouter, Switch, Route /*, Link*/ } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/navBar';
import Slider from './components/Slider/Slider';
import Cart  from './components/Cart/Cart';
import Cartsvg from './assets/img/shopping-cart.svg';
import TopProducts from './components/TopProducts/TopProducts';
import Productos from "./components/Productos";
import Login from "./components/Login/Login";
import ItemDetail from './components/ItemDetail/ItemDetail'

// import {MyCount} from './components/Contador/Contador';
function App( props ) { 
  const [isOpen, setIsOpen] = useState(false)
  return (
  /*INITIAL MAIN TAG FOR ENTIRE APP*/

    <main className="App container-fluid">
      <BrowserRouter>
      {/*HEADER PLUS NAV SECTIONS*/}
      <Switch>
        <Route exact path="/index.html">
        <Navbar>
      <li className="list-item Shopping-cart"><button onClick={() => setIsOpen(true)} className="CartButton"><img className="Cart" src={Cartsvg} alt="shopping-cart-icon"/>Cart</button></li>
      </Navbar>
      <Slider/>
      <Cart open={isOpen} onClose={() => { setIsOpen(false)}}/>
    <TopProducts/>
    <ItemDetail/>
        </Route>
      </Switch>
      


<Switch>   
  <Route exact path="/Productos" component={Productos}>
  </Route>
  <Route exact path="/Login">
    <Login>
    </Login>
  </Route>
</Switch>
</BrowserRouter>

    
    </main>);
    
  }


export default App;
