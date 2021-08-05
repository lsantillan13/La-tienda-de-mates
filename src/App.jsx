import {Switch, Route} from "react-router-dom";
import React from 'react';
import './App.css';
/**/
import Default  from './Pages/Default/Default';
import ItemDetailMain from './components/ItemDetailContainer/ItemDetailContainer';
import {MatesContainer} from './Pages/Productos/Mates';
import ProductsContainer from './Pages/Todos';
import {CartProvider} from './Context/CartContext/CartContext';
import ItemContainer from "./components/ItemContainer/ItemContainer";
// import Login from "./components/Login/Login";
// import {MyCount} from './components/Contador/Contador';
function App() {
  return (
  <div className="App">
      {/* MY APP COMPONENT */}
  <Switch>
    <CartProvider>
    <Route exact path="/" component={Default}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/category/:categoryId" component={MatesContainer}/>
    <Route exact path="/Productos/Todos los productos" component={ProductsContainer}/>
    <Route exact path="/Itemcontainer" component={ItemContainer}/>
    <Route exact path="/Cart" /*component={ShoppingCart}*//>
    </CartProvider>
  </Switch>













  </div>)}
export default App;


