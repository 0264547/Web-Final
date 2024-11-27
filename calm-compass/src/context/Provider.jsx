import React, {createContext, useContext, useReducer} from 'react';
import Reducer from './Reducer.jsx';
import { SIGN_UP } from './actions';
import api from '../utils/api';

const Context = createContext();

function Provider({children}){
    const initialState = {
        login:false
    }
    const [state,dispatch] = useReducer(Reducer,initialState);
    return(
        <Context.Provider value = {{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}

function useMyContext(){
    return useContext(Context);
}

async function signUp(dispatch,email,password){
    try{
        await api.post("/signUp",{email,password});

            dispatch({
                type: SIGN_UP,
                payload:email
            });
                        
    } catch(err){
        console.log("Error")
    }
}

export default Provider;
export {useMyContext,signUp};