import React from 'react'
import useShop from '../context/cart/ShopContext'

export const CartShop = () => {

    const { products, total } = useShop()

  return (
    <div>
        {
            products.map((product, index) => (
                <div key={index}>
                    <img src={product.img} alt='' width="100px" />
                    <h3>{product.title} donut</h3>
                    <p>{product.amount}</p>
                    <button>Eliminar</button>
                </div>
                
            ))
        }
            

        


    </div>
  )
}
