import { createContext, useReducer } from "react";
import { cardReducer } from "./Reducer";

interface AppContextInterface {
    listItem: string[];
    addToVote():any;
}

type Props = {
    children?: JSX.Element | JSX.Element[]
}


export const CardContext = createContext<AppContextInterface | null>(null)


const CardState = ({ children }: Props) => {

    const initialState = {
        listItems: []
    }

    const [state, dispatch] = useReducer(cardReducer, initialState)


    const addToVote = (product:any) => {

        dispatch({
            type:'ADD_TO_VOTE',
            payload: product
        })
        
    }



    return (
        <CardContext.Provider value={{
            addToVote,
            listItems: state.listItems
        }}>
            {children}
        </CardContext.Provider>
    )

}

export default CardState

