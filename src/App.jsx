import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/navBar';
import Cart  from './components/Cart/Cart';
import Cartsvg from './assets/img/shopping-cart.svg';
// import Login from "./components/Login/Login";
/* SECTIONS COMPONENTS*/
import Combos from './components/Combos/Combos';
import GiftBox from './components/GiftBox/GiftBox';
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Footer from './components/Footer/Footer'
import ItemDetail from './components/ItemDetail/ItemDetail';
// import {MyCount} from './components/Contador/Contador';
function App(  ) { 
  const [isOpen, setIsOpen] = useState(false)
  return (
  /*INITIAL MAIN TAG FOR ENTIRE APP*/
  <Router>
    <main className="App container-fluid">
      <Route exact path="/">  
        <section className="my-hero-container container-fluid">
          <div className="my-hero container-fluid"/>
        </section>
      {/*HEADER PLUS NAV SECTIONS*/}

        <NavBar>
          <li className="list-item Shopping-cart"><button onClick={() => setIsOpen(true)} className="CartButton"><img className="Cart" src={Cartsvg} alt="shopping-cart-icon"/>Cart</button></li>
        </NavBar>

        <Cart open={isOpen} onClose={() => { setIsOpen(false)}}/>

        <TopProducts/>

        {/* <ItemDetail/> */}
        <Combos/>

        <GiftBox/>

        <Footer/>

      </Route>

    {/*MATES*/}
    <Switch>
      <Route path="/Productos/Mate/:id">
        <NavBar/><ItemDetail/><Footer/>
      </Route>
    </Switch>
    {/*COMBOS*/}
    <Switch>
      <Route path="/Productos/Combo/:id">
        <NavBar/><ItemDetail/><Footer/>
      </Route>
    </Switch>
    {/*GIFTBOX*/}
    <Switch>
      <Route path="/Productos/GiftBox/:id">
        <NavBar/><ItemDetail/><Footer/>
      </Route>
    </Switch>


    </main>
  </Router>    
    )}


export default App;
