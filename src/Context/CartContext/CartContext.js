import {createContext, useState} from 'react'
export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    
    /*CONSOLE LOG PARA VER COMO SE SUMAN LOS ITEMS*/
    console.log(carrito)

    /*LOS ITEMS SE AGREGAN AL CARRITO DESDE LA HOME PAGE O DESDE EL ITEM DETAIL*/
    /*EN EL ITEM DETAIL LOS ITEMS SE AGREGAN AL FINALIZAR LA COMPRA*/
    const item = carrito.map((x) => x);
    
    /*DESPEJAR CARRITO*/
    const clearCart = () => setCarrito([]);
    
    /*ESTA FUNCIÓN NO ME SALIA DE OTRA MANERA*/
    const removeItem = (x) => {
    let itemSinRemover = carrito.filter((item) => item.id !== x.id);
    setCarrito(itemSinRemover);}
    
    /*ESTA FUNCIÓN NO ME SALIA DE OTRA MANERA*/
    const isntInCart = (items) =>
    carrito.filter((item) => item.id === items.id).length === 0;
    const agregarAlCarrito = (itemRecibido) => {
    if (isntInCart(itemRecibido)) {setCarrito([...carrito, itemRecibido]);} 
    else {alert("El Producto ya se encuentra en el carrito!");}};
    
           
    /*CANTIDAD PARA EL WIDGET*/
    const cantidadCarrito = () => {return carrito.reduce( (acc, prod) => parseInt(acc) + parseInt(prod.cantidad), 0)}

    /*CANTIDAD PARA EL TOTAL*/
    const cantidadTotal = () => {
        return carrito.reduce( (acc, prod) => (acc) + (prod.precio * prod.cantidad), 0)
    }
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito, removeItem,clearCart, item ,cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )}

