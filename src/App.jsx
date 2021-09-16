import {Switch, Route} from "react-router-dom";
import React from 'react';
import './App.css';

/**/
import Default  from './Pages/Default/Default';
import ItemDetailMain from './components/ItemDetailContainer/ItemDetailContainer';
import ProductsContainer from './Pages/Todos';
import {CartProvider} from './Context/CartContext/CartContext';
import { ViewProvider } from "./Context/CartView Context/CartViewContext";
import ItemContainer from "./components/ItemContainer/ItemContainer";

/*PAGES*/
import Login from "./components/Login/Login";
import Tips from "./components/Tips/Tips";
import Mayorista from "./components/Mayorista/Mayorista";
import CatContainer from "./components/CatContainer/CatContainer";
import Products from "./Pages/All Products/Products";
import Sale from "./Pages/Sale/Sale";

function App() {
  return (
  <div className="App">
  <Switch>
    <CartProvider>
      <ViewProvider>
       <Route exact path="/" component={Default}/>
       <Route exact path="/item/:id" component={ItemDetailMain}/>
       <Route exact path="/Category/:category" component={CatContainer}/>
       <Route exact path="/Cart" component={ProductsContainer}/>
       <Route exact path="/Itemcontainer" component={ItemContainer}/>
       <Route exact path="/Login" component={Login}/>
       <Route exact path="/Tips" component={Tips}/>
       <Route exact path="/Mayorista" component={Mayorista}/>
       <Route exact path="/Productos/Todos los productos" component={Products}/>
       <Route exact path="/Sale" component={Sale}/>
       </ViewProvider>
    </CartProvider>
  </Switch>
</div>)}
export default App;


