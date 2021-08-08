import {createContext, useState} from 'react';
export const CartViewContext = createContext();

export const ViewProvider = ({children}) => {
const [isOpen, setIsOpen] = useState(false);
return(
<CartViewContext.Provider value={{isOpen, setIsOpen}}>
    {children}
</CartViewContext.Provider>)}




