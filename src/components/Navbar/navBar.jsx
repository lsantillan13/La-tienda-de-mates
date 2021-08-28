import {Link, useParams} from "react-router-dom";
import React from "react";
import "./navbar.css";
import User from '../../assets/img/user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';
import Cartsvg from '../../assets/img/shopping-cart.svg';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const {CategoryId} = useParams();
return (
    <main>
<nav className="navbar-style container-fluid">
<Link to={`/`}>
<h1 className="brand">La Tienda de Mates</h1>
</Link>
<ul className="header--list">
    <li className="list-item list-item-left active sale" /*activeClassName="active"*/><Link to="/Sale">SALE</Link></li>
    <li className="list-item list-item-left products" /*activeClassName="active"*/><Link to="/Productos/Todos los productos">Productos</Link>
    <div className="subnav">
        <h2 className="subnav--title">Productos</h2>
        <div className="subnav-item-container">
            <ul className="subnav--list">
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Mates</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Yerba</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Blends</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Tablas</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Bombillas</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Combos</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Cajas de regalo</Link>
        <Link to={`/Category/${CategoryId}`} className="subnav-item">Yerberas y Azucareras</Link>
       </ul>
       <h2 className="subnav--subtitle">Más vendido</h2>
       <div className="image-container">
           {/* ESTE HAY QUE CAMBIARLO */}
           {/* <img className="subnav-image" alt={"imagen-producto-destacado"} src={ItemList.MateList[0].imagen}></img> */}
       </div>
       <Link to="/Productos/Todos los productos"><button className="subnav-button">Todos los Productos</button></Link>
       </div>
        
        
    </div>
    <div className="overlay"></div>
    </li>
    <li className="list-item list-item-left mayorista" /*activeClassName="active"*/><Link to="/Mayorista"> Mayorista </Link></li>
    <li className="list-item list-item-left tips" /*activeClassName="active"*/><Link to="/Tips">Tips</Link></li>
    <li className="list-item User-login"><Link to="/Login" className="algo">
    <img className="User" src={User} alt="user-icon-for-login"/>Login</Link>
    </li>

    <li className="list-item Shopping-cart">
    <Link to="/Cart"><button><img className="Cart" src={Cartsvg} alt="shopping-cart-icon"/>Cart</button></Link>
    <CartWidget/>
    
    </li>
</ul>
    <span className="container search-container">
    <div className="box">
    <input type="text" placeholder="¿Qué estas buscando?"/>
    <label htmlFor="check"><BsSearch className="search"/></label>
    </div>
    </span>
    </nav>

</main>
    )}
export default NavBar;