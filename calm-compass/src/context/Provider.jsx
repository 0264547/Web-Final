import React, {createContext, useContext, useReducer} from 'react';
import Reducer from './Reducer.jsx';
import { ADD_POST, SIGN_UP } from './actions';
import api from '../utils/api';

const Context = createContext();

function Provider({children}){
    const initialState = {
        login:false,
        posts: []
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

async function signUp(dispatch,email,password,name){
    try{
        await api.post("/signUp",{email,password,name});

            dispatch({
                type: SIGN_UP,
                payload:email
            });
                        
    } catch(err){
        console.log("Error")
    }
}

async function addPost(dispatch,title,description,upvotes,downvotes){
    try{
        const res = await api.post("/addPost",{title,description,upvotes,downvotes});
        console.log(res)
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
                        
    } catch(err){
        console.log("Error")
    }
}

export default Provider;
export {useMyContext,signUp,addPost};