import React from "react";
import "./navbar.css";
import Logo from '../../assets/img/logo.png';
import Cart from '../../assets/img/shopping-cart.svg';
import User from '../../assets/img/user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';

const Navbar = (props) => {
    return (
        <nav className="navbar-style container" name="My" sub=" Store">
            <a href="index.html"> <img className="logo" src={Logo} alt="" /> </a>
            <ul className="header--list">
                <li className="list-item active"><a href="index.html">SALE</a></li>
                <li className="list-item"><a href="index.html">Productos</a></li>
                <li className="list-item"><a href="index.html">Mayorista</a></li>
                <li className="list-item"><a href="index.html">Tips</a></li>
                <li className="list-item User-login"> <a href="index.html"><img className="User" src={User} alt="user-icon-for-login"/>Login</a></li>
                <li className="list-item Shopping-cart"> <a href="index.html"><img className="Cart" src={Cart} alt="shopping-cart-icon"/>Cart</a></li>
                </ul>
                <span className="container search-container">
        <div className="box">
        <input type="text" placeholder="¿Qué estas buscando?"/>
        <label htmlFor="check"><BsSearch className="search"/></label>
        </div>
        </span>
            
        
        </nav>

       
    )
}

export default Navbar;