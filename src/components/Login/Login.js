import React from 'react';
import Navbar  from '../Navbar/navBar';
import {GrInstagram} from 'react-icons/gr';
import './Login.css';

function Login() {
    return(
        <main>
            <Navbar></Navbar>
            <section>
            <div className="login-form-container container">
                <h2 className="login-form-title">Inicia sesión o regístrate</h2>
                <h3 className="login-form-subtitle">Puedes realizar un pedido sin registrarte</h3>
                <form className="container">
                    <label className="label-title">Ingresa tu usuario</label>
                    <input type="mail" className="label-for-email" placeholder="Usuario o correo electrónico"/>
                    <input type="password" className="label-for-password" placeholder="Contraseña"/>
                    <button className="log-in-button">Iniciar sesión</button>
                    <h6>O</h6>
                    <span className="label-for-instagram">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><GrInstagram/>Iniciar sesión con Instagram</a> <hr/>
                    </span>
                </form>
            </div>
            </section>
        </main>
    )}
export default Login;