import React, { useReducer } from 'react'
import CartContext from './CartContext'

import CartReducer from './CartReducer'

const CartState = ({children}) => {

    const initialState = {
        showCart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)


    const addToCart = ( product ) => {

        dispatch({
            type:"ADD_TO_CART",
            payload: product
        })

    }

    const removeItem = ( id ) => {

        dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })

    }

    const showHideCart = () => {
        dispatch({
            type:"SHOW_HIDE_CART"
        })
    }


  return (
    <CartContext.Provider value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        showHideCart

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartState