import { BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import React from "react";
import "./navbar.css";
import Logo from '../../assets/img/logo.png';
import User from '../../assets/img/user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';


const NavBar = ( { props, children}) => {
return (
<nav className="navbar-style container-fluid">
<Router>
<NavLink to="/">
<img className="logo" src={Logo} alt=""/>

</NavLink>
<ul className="header--list">
    <li className="list-item list-item-left active" /*activeClassName="active"*/><Link to="/Sale">SALE</Link></li>
    <li className="list-item list-item-left" /*activeClassName="active"*/><NavLink to="/Productos">Productos</NavLink></li>
    <li className="list-item list-item-left" /*activeClassName="active"*/><Link to="/Mayorista"> Mayorista </Link></li>
    <li className="list-item list-item-left" /*activeClassName="active"*/><Link to="/Tips">Tips</Link></li>
    <li className="list-item User-login"><Link to="/Login">
    <img className="User" src={User} alt="user-icon-for-login"/>Login</Link>
    </li>
</ul>
    <span className="container search-container">
    {children}
    <div className="box">
    <input type="text" placeholder="¿Qué estas buscando?"/>
    <label htmlFor="check"><BsSearch className="search"/></label>
    </div>
    </span>
    </Router>    
    </nav>)}
export default NavBar;