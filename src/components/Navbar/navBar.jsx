import React from "react";
import "./navbar.css";
import Cart from '../../assets/img/shopping-cart.svg';
import Search from '../../assets/img/search.svg';
const Navbar = (props) => {
    return (
        <nav className="navbar-style">
            <h1>LA TIENDA DE MATES</h1>
            <ul>
                <li> <a href="index.html">SALE</a></li>
                <li><a href="index.html">PRODUCTOS</a></li>
                <li><a href="index.html">MAYORISTA</a></li>
                <li><a href="index.html">FAQ</a></li>
            </ul>
            <img className="lupa"src={Search} alt="lupa-de-busqueda" />
            <input type="search"  placeholder="¿Qué estás buscando?" className="search"/>
            <img src={Cart} alt="carrito-de-compras" className="shopping-cart" />
            
        </nav>

       
    )
}

export default Navbar;