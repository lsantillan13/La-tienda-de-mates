import {Switch, Route} from "react-router-dom";
import React from 'react';
import './App.css';
/**/
import Default  from './Pages/Default/Default';
import ItemDetailMain from './components/ItemDetailContainer/ItemDetailContainer';
import {MatesContainer} from './Pages/Productos/Mates';
import ProductsContainer from './Pages/Todos';
import {CartProvider} from './Context/CartContext/CartContext';
import { ViewProvider } from "./Context/CartView Context/CartViewContext";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import FirebaseTest from './Pages/FirebaseTest/FirebaseTest';

/*COMPONENTE DE PRUEBA*/
// import Login from "./components/Login/Login";
// import {MyCount} from './components/Contador/Contador';
function App() {
  return (
  <div className="App">
      {/* MY APP COMPONENT */}
  <Switch>
    <CartProvider>
    <ViewProvider>
    <Route exact path="/" component={Default}/>
    <Route exact path="/item/:id" component={ItemDetailMain}/>
    <Route exact path="/category/:categoryId" component={MatesContainer}/>
    <Route exact path="/Cart" component={ProductsContainer}/>
    <Route exact path="/Itemcontainer" component={ItemContainer}/>
    <Route exact path="/Firebase" component={FirebaseTest}/>
    </ViewProvider>
    </CartProvider>
  </Switch>













  </div>)}
export default App;


