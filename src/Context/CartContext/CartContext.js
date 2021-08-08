import {createContext, useState} from 'react'
export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    /*CONSOLE LOG PARA VER COMO SE SUMAN LOS ITEMS*/
    console.log(carrito);
    /*LOS ITEMS SE AGREGAN AL CARRITO DESDE LA HOME PAGE O DESDE EL ITEM DETAIL*/
    /*EN EL ITEM DETAIL LOS ITEMS SE AGREGAN AL FINALIZAR LA COMPRA*/
    const agregarAlCarrito = (itemRecibido) => {setCarrito([...carrito, itemRecibido])}
    const eliminarProducto = (id) => {setCarrito(carrito.filter(prod => prod.id !== id));}
    const clearCart = () => setCarrito([]);
    /*ESTA FUNCIÓN NO ME FUNCIONA SOLO PERMITE AÑADIR 1 ITEM AL CARRITO*/
    // const isntInCart = (items) =>
    // cart.filter((item) => item.id === items.id).length === 0;
    // const addToCart = (itemRecibido) => {
    //     if (isntInCart(itemRecibido)) {setCart([...cart, itemRecibido]);} 
    //else {alert("El Producto ya se encuentra en el carrito!");}};
           
    /*CANTIDAD PARA EL WIDGET*/
    const cantidadCarrito = () => {return carrito.reduce( (acc, prod) => parseInt(acc) + parseInt(prod.cantidad), 0)}

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadCarrito, eliminarProducto,clearCart,}}>
            {children}
        </CartContext.Provider>
    )}

