import React from 'react'
import { useSelector } from 'react-redux';
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext(null);


const ShoppingCartContextComponent = (props) => {
    const {shoppingCart} = useSelector(state=> state.shoppingCart);

    return ( 
        <ShoppingCartContext.Provider value={{shoppingCart}}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextComponent
