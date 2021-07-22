import { BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import "./navbar.css";
import Logo from '../../assets/img/logo.png';
import User from '../../assets/img/user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';


const NavBar = ( { props, children}) => {
    return (
    <nav className="navbar-style container-fluid">
        <BrowserRouter>
        <Switch>
        <Route exact path={'/'} component={NavBar}>
        <a className="brand" href="/"> <img className="logo" src={Logo} alt="" /> </a>
        <ul className="header--list">
            <li className="list-item list-item-left active"><a href="/Sale">SALE</a></li>
            <li className="list-item list-item-left"><a href="/Productos">Productos</a></li>
            <li className="list-item list-item-left"><a href="/Mayorista">Mayorista</a></li>
            <li className="list-item list-item-left"><a href="/Tips">Tips</a></li>
            <li className="list-item User-login"> <a href="/Login"><img className="User" src={User} alt="user-icon-for-login"/>Login</a></li>
        </ul>
    <span className="container search-container">
    {children}
    <div className="box">
    <input type="text" placeholder="¿Qué estas buscando?"/>
    <label htmlFor="check"><BsSearch className="search"/></label>
    </div>
    </span>
    </Route>
    </Switch>
    </BrowserRouter>    
    </nav>       
    
    )}
export default NavBar;