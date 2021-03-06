import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import React, { useState, useEffect, useContext } from 'react'


import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    Link,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery,
  } from '@mui/material';


import { FiMenu } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Store } from '../utils/Store'
import { useSnackbar } from 'notistack'
import jsCookie from 'js-cookie'
import { useRouter } from 'next/router'
import { getError } from 'utils/error';
import axios from 'axios';
import { Carrito } from './tienda/cart/Carrito';

export const NavBar = () => {

    const { state, userInfo, dispatch } = useContext(Store)

    const router = useRouter()

    const { theme, setTheme } = useTheme()

    const [show, setShow] = useState(false)
    const [cartShow, setCartShow] = useState(false)

    const [ cartQ , setCartQ ] = useState(0)

    useEffect(() => {
        handleCart()
    },[state.cart.cartItems])

    const [themeValue, setThemeValue] = useState(false)

    useEffect(() => {

        theme === 'light' ? setThemeValue(true) : setThemeValue(false)

    },[theme])

    const handleClick = () => {
        setShow(false)
    }



    const handleCart = () => {

        const estadoCart = state.cart.cartItems
        
        if( estadoCart.length > 0){
            setCartQ(estadoCart.reduce((a, c) => a + c.quantity, 0))
        }

        if(estadoCart.length > 20){
            setCartQ(`+${20}`)
        }

        if( estadoCart.length <= 0){
            setCartQ(null)
            
        }
    }

    const { enqueueSnackbar } = useSnackbar(); 


  return (
    <>
<div className='z-40 '>


<nav id='navBar' className='p-5 backdrop-blur-xl top-0 fixed md:flex md:items-center md:justify-between select-none z-10 w-screen '>
    <div className='flex justify-between items-center'>
        <NextLink href="/">

        <span onClick={handleClick} className='text-2xl font-[Poppins] cursor-pointer text-lightAccent-200 dark:text-darkAccent-200'>
            PsicoHolistica
        </span>
        </NextLink>
        <span className='text-3xl cursor-pointer mx-2 md:hidden block' onClick={() => setShow(!show)} >
            <FiMenu name='menu' />
        </span>
       
    </div>
    
    <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
    <NextLink href="/cursos"><li className='mx-4 my-6 md:my-0 text-xl text-lightAccent-200 hover:text-lightAccent-300 font-bold dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer'>Cursos y Talleres</li></NextLink>
    <NextLink href="https://psicoholistica.mitiendanube.com/"><li className='mx-4 text-xl text-lightAccent-200 hover:text-lightAccent-300 font-bold dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer'>Tienda</li></NextLink>
    {/* <NextLink href="/tienda/carrito">
      <li className='mx-4 my-6 md:my-0 text-xl  hover:text-lightAccent-300 font-bold text-lightAccent-200 dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer relative' onClick={() => setCartShow(!cartShow)}><AiOutlineShoppingCart size={24} /><p className="absolute text-white -top-3 -right-3 bg-red rounded-full px-2 text-sm">{cartQ } </p></li>
    </NextLink> */}

        <li className='mx-4 my-6 md:my-0 text-xl text-lightAccent-300 dark:text-darkAccent-300 ' >
            <label htmlFor="toggle-switch flex items-end" >
                <input type="checkbox" id="toggle-switch"
                    
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    value={themeValue}
                    className="cursor-pointer w-12 h-6 rounded-full appearance-none bg-lightTitles dark:bg-lightBlack border-2 checked:bg-lightAccent transition duration-200 relative bottom-0" />
            </label>
        </li>
        
    
    </ul>
</nav>
    {
        show && (
            <div className=' 
            backdrop-blur-xl z-10 
            w-screen h-screen right-0 fixed pr-3 mt-16 '>
            <ul className='transition-all ease flex flex-col items-end gap-y-3  '>
            <NextLink href="/cursos"><li onClick={handleClick} className='mx-4 md:my-0 text-xl text-lightAccent-200 hover:text-lightAccent-300 font-bold dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer'>Cursos y Talleres</li></NextLink>
            <NextLink href="https://psicoholistica.mitiendanube.com/"><li onClick={handleClick} className=' mx-4 text-xl text-lightAccent-200 hover:text-lightAccent-300 font-bold dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer'>Tienda</li></NextLink>
            {/* <NextLink href="/tienda/carrito"><li onClick={handleClick}  className='mx-4 md:my-0 relative text-xl text-lightAccent-200 hover:text-lightAccent-300 font-bold dark:text-darkAccent-200 dark:hover:text-darkAccent-300 cursor-pointer'><AiOutlineShoppingCart size={24} /><p className="absolute text-white -top-3 -right-3 bg-red rounded-full px-2 text-sm">{cartQ } </p></li></NextLink> */}
    
        <li className='mx-4 md:my-0 text-xl dark:text-darkAccent-200  ' >
            <label htmlFor="toggle-switch flex items-end">
                <input type="checkbox" id="toggle-switch"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="cursor-pointer w-12 h-6 rounded-full appearance-none bg-lightBlack border-2 checked:bg-lightAccent transition duration-200 relative bottom-0" />
            </label>
        </li>
            </ul>
            </div>
        ) 
    }
</div>
    </>
    
  )
}
