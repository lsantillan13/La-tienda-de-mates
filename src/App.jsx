import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
/**/
import Default  from './Pages/Default/Default';
import ItemDetailMain from './components/ItemDetailContainer/ItemDetailContainer';
import {MatesContainer} from './Pages/Productos/Mates'
/**/
import ProductsContainer from './Pages/Todos';

// import Login from "./components/Login/Login";
// import {MyCount} from './components/Contador/Contador';
function App() {
  return (
  <div className="App">
      {/* MY APP COMPONENT */}
  <Switch>
    <Route exact path="/" component={Default}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/category/:categoryId" component={MatesContainer}/>
    <Route exact path="/Productos/Todos los productos" component={ProductsContainer}/>
    <Route exact path="/Cart" /*component={ShoppingCart}*//>
  </Switch>













  </div>)}
export default App;


