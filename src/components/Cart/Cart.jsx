import React, { useState}  from 'react';
import styled, { css } from 'styled-components';
import './Cart.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;    
`
const Button = styled.button`
width: 326.75px;
padding: 16px 32px;
border-radius: 4px;
border: none;
color: #fff;
cursor: pointer;
outline: 2px solid rgba(255,211,0,.5);
outline-offset: -2px;
background: linear-gradient(
90deg
,#ffd300 0%,#d41e33 100%);
`
const Button2dary = styled.button`
width: 90%; padding: 16px 25%; border-radius: 4px; border: none;
position: relative; top: 30px; left: 6%; right: 5%;
color: #fff; border: 0; outline: 2px solid rgba(255,211,0,.5);
outline-offset: -2px; background: linear-gradient(90deg,#ffd300 0%,#d41e33 100%);
`

const Text = styled.h6`
font-weight: 600;
font-size: 20px;
background-color: transparent;
width: max-content;
`


const Cart = ( ) => {

    // const[showModal, setShowModal] = useState(false)
    // const openModal = () =>{
    //     setShowModal(prev => !prev)
    // }

    return (
        <Container>
            <div className="Cart--popup">                                             
                <span className="Cart-popup-container"><BsBag className="Cart-popup-bag-icon"/> 
                <h2 className="Cart-popup-title">Tu carrito de compras</h2>
{/*<P>JAVASCRIPT</P> ----->*/}<p className="Cart-popup-item-counter">(0)</p>             
               <button className="Cart--popup-close-button"> <AiOutlineClose className="Cart--popup-close-icon"/></button> </span>
            <div className="Cart-popup-content"><div className="Cart-popup-product">
            <div className="Cart-popup-product-item-info">
            <div className="Cart-popup-product-item-name"> <h2 className="item-name">Item</h2> </div>
            <div className="Cart-popup-product-item-image"/>    
            </div></div></div>
            <div className="Cart-popup-bottom">
              <table><tr>
                <td className="Cart-popup-bottom-product-total"><strong>Total</strong></td>
                <td className="Cart-popup-bottom-product-value"><strong>$  <span>valor</span></strong></td>
              </tr></table>
                <Button2dary className="Cart-popup-button-view-order">
                <h2 className="alternative-text">Revisar el pedido</h2>
                </Button2dary>
                <button className="alternative-button">
                <h2 className="alternative-text"> Seguir comprando</h2>
                </button>
            </div>
            </div>
            <Button> <Text>Añadir al Carrito <AiOutlineArrowRight className="arrow" /> </Text></Button>
        </Container>


    )}













export default Cart;