// import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/navBar';
import Slider from './components/Slider/Slider';
import Cart  from './components/Cart/Cart';
import Cartsvg from './assets/img/shopping-cart.svg';
import TopProducts from './components/TopProducts/TopProducts';

// import {MyCount} from './components/Contador/Contador';
function App( props ) {



  
  const [isOpen, setIsOpen] = useState(false)

  return (
  /*INITIAL MAIN TAG FOR ENTIRE APP*/
    <main className="App container-fluid">
      {/*HEADER PLUS NAV SECTIONS*/}
      <Navbar>
      <li className="list-item Shopping-cart"><button onClick={() => setIsOpen(true)} className="CartButton"><img className="Cart" src={Cartsvg} alt="shopping-cart-icon"/>Cart</button></li>
      </Navbar>
      <Slider/>
      <Cart open={isOpen} onClose={() => { setIsOpen(false)}}/>
 
    <TopProducts/>
    </main>);
    
  }


export default App;
