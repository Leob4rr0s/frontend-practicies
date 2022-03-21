
import React from 'react'

import { ShopProvider } from './Context/ShopContext'
import { HomeScreen } from './HomeScreen'


export const MainApp = () => {


  return (

    <ShopProvider>
        <HomeScreen />

    </ShopProvider>
  )
}
