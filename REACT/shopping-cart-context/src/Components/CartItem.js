import React, { useContext } from 'react'


import './CartItem.css'
import CartContext from '../Context/Cart/CartContext'



export const CartItem = ({item}) => {

    const { removeItem } = useContext(CartContext)


    return (
        <li className='CartItem__item'>
            <img src={item.image} alt='' />
            <div>
                {item.name} {`$ ${item.price}`}
            </div>
            <button className='CartItem__button' onClick={() => removeItem(item._id)}>Remove</button>
        </li>
    )
}
