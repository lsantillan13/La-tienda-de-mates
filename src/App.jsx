import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import NavBar from './components/Navbar/navBar';
import Cart  from './components/Cart/Cart';
import Cartsvg from './assets/img/shopping-cart.svg';
import Login from "./components/Login/Login";
/* SECTIONS COMPONENTS*/
import Combos from './components/Combos/Combos';
import GiftBox from './components/GiftBox/GiftBox';
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Footer from './components/Footer/Footer'
// import Productos from "./components/Productos";
 import ItemDetail from './components/ItemDetail/ItemDetail';
// import {MyCount} from './components/Contador/Contador';
function App(  ) { 
  const [isOpen, setIsOpen] = useState(false)
  return (
  /*INITIAL MAIN TAG FOR ENTIRE APP*/
  <BrowserRouter>
    <main className="App container-fluid">
    <Switch>
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
      </Switch>
      


<Switch>   
   <Route path="/detalle-productos" component={NavBar}>
    <ItemDetail>
      Hola

    </ItemDetail>
  </Route>
  </Switch>
  <Switch>
  <Route  path="">

  </Route>
  </Switch>



    </main>
    </BrowserRouter>    
    )
    
    
  }


export default App;
