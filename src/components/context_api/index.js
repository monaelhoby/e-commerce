import React, {useState, createContext, useReducer, useEffect} from "react";
import Reducer from "../../store/reducers";
import {state} from "../../store/reducers";


export const StoreContext = createContext();

const StoreProvider = props => {

const [initialState, dispatch] = useReducer(Reducer,state);

        return(
            <StoreContext.Provider value={{...initialState, dispatch}}>
                {props.children}
            </StoreContext.Provider>
        )
}

export const StoreConsumer = StoreContext.Consumer;

export default StoreProvider

