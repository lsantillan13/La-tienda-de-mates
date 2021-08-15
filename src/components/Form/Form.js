import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { database } from '../../Firebase/Firebase';

const Form = ({cantidadTotal}) => {

    const {carrito} = useContext(CartContext)

    /*PREVENT DEFAULT*/
    const handleSubmit = (ev) => {ev.preventDefault();

    /*USER DATA*/
    const userData = {
        name: ev.target.name.value,
        surname: ev.target.surname.value,
        phone: ev.target.phone.value,
        email: ev.target.email.value,
        city: ev.target.city.value,
    };
    /*ORDER DATA*/
    const newOrder = {
        buyer: userData,
        items: carrito,
        date: new Date().toString(),
        total: cantidadTotal(),
    };

    /*MY COLLECTION*/
    const orders = database.collection('ordenes');

    /*ORDER ID*/
    let orderId;

    /*UPLOAD ORDER*/
    orders.add(newOrder)
    .then((response) => {
        orderId = response.id;
        alert(`Compra generada con exito!\n Usuario: ${userData.name} \n Order Id: ${response.id}`)
    })
    .catch((err) => alert('ERROR: ', err))
    
}


    return(
    <form onSubmit={handleSubmit}>
        <label><input type="text" placeholder="First Name*" id="name"/></label>
        <label><input type="text" placeholder="Last Name*" id="surname"/></label>
        <label><input type="text" placeholder="Zip Code*" id="zCode"/></label>
        <label><input type="text" placeholder="City*" id="city"/></label>
        <label><input type="email" placeholder="Email*" id="email"/></label>
        <label><input type="tel" placeholder="Phone*" id="phone"/></label>
        <button type="submit">SEND</button>
    </form>

    )
}


export default Form;