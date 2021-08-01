import { useReducer, React } from 'react';
import CartReducer from './CartReducer';
import CartContext from './CartContext';
import data from '../../data/productos/itemlist.json';

const CartState = (props) => {
    const initialState = {
        item:{},
        quantity:"",
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    
    const getItems = () => {
        const res = data;
        console.log(res)
    }
    
    const getQuantity = () => {}
    return(
        <CartContext.Provider value={{
            item: state.item,
            selectedItem: state.selectedItem,
            getItems,
            getQuantity,
        }}>

            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;