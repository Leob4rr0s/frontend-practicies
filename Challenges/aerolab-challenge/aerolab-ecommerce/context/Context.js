
import { createContext, useEffect, useReducer, useState } from "react";

const initialState = {
     user:{},
     products: [],
}

export const UserContext = createContext()

const reducer = ( state, action ) => {

    const { type, payload } = action

    switch ( type ) {
        case "ADD_USER": {
            console.log('LLAMADA user')
            return {...state,  user: payload }
        }

        case "ADD_PRODUCTS": {
            
            return {...state,  products: payload }
        }

        case "ADD_POINTS": {
            if( !state.user ) return

            return { ...state, user: {...state.user, points: payload }  }
        }

        case "BUY_PRODUCT": {
            if( state.user.points < payload ) return console.log('No tienes suficientes puntos para canjear el producto')

            return { ...state, user: {...state.user, points: -payload }  }
        }

        default:
            return
    }


}


export const Store = ({ children }) => {

    const [state, dispatch] = useReducer( reducer, initialState )

    const [user, setUser] = useState()
    const [status, setStatus] = useState( 'pending' )

    useEffect(() => {
        if (!state.user) return
        
        const getUser = () => {
           fetch('https://coding-challenge-api.aerolab.co/user/me', {
                method: 'get', 
                headers: new Headers({
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiZTM0OTUyMzQwMzAwMjE2YmQxYmEiLCJpYXQiOjE2NTU0MzIwMDl9.UHbkGYov1GR5CqTExXAic-WmdKs3mFRlWeXm_a_zYIg"
                }),
            })
            .then( resp => resp.json())
            .then( data => dispatch({type:"ADD_USER" , payload: data}) )
            
        }
        return getUser()
        
    
        },[])

        useEffect(() => {
            if (!state.products) return

        const getProducts = () => {
           fetch('https://coding-challenge-api.aerolab.co/products', {
                method: 'get', 
                headers: new Headers({
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiZTM0OTUyMzQwMzAwMjE2YmQxYmEiLCJpYXQiOjE2NTU0MzIwMDl9.UHbkGYov1GR5CqTExXAic-WmdKs3mFRlWeXm_a_zYIg"
                }),
            })
            .then( resp => resp.json())
            .then( data => dispatch({type:"ADD_PRODUCTS", payload: data}) )
            
        }
        getProducts()
        },[])


    const value ={
        state,
        dispatch
    }

    return <UserContext.Provider value={value} >{ children }</UserContext.Provider>



}