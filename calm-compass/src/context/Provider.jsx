import React, {createContext, useContext, useReducer,useEffect} from 'react';
import Reducer from './Reducer.jsx';
import { ADD_POST, SIGN_UP,SIGN_IN, SIGN_OUT, CHAT_BOT } from './actions';
import api from '../utils/api';

const Context = createContext();

function Provider({children}){
    const initialState = {
        signin: false,
        posts: [],
        chatBotMessages: [],
        userMessages: []
    }
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem('appState'));
        
        if (storedState) {
          dispatch({ type: SIGN_IN, payload: storedState });
        }
      }, []);
    
      useEffect(() => {
        if (state.signin) {
          localStorage.setItem('appState', JSON.stringify(state));
        } else {
          localStorage.removeItem('appState');
        }
      }, [state]);

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
            });
                        
    } catch(err){
        console.log(err)
    }
}

async function signIn(dispatch, email, password) {
    try {
        const res = await api.post("/signIn", { email, password });
        dispatch({
            type: SIGN_IN,
            payload: res.data.name,
        });
        localStorage.setItem('appState', JSON.stringify({ name: res.data.name, signin: true }));
    } catch (err) {
        console.error('Error in signIn:', err.response || err);  
    }
}


async function signOut(dispatch){
    try{
        dispatch({
            type: SIGN_OUT,
        });
    
    } catch(err){
        console.log(err);
    }
}

async function addPost(dispatch,title,description,name){
    try{
        const res = await api.post("/addPost",{title,description,name});
          
        dispatch({
                type: ADD_POST,
                payload: res.data.name
            });
                        
    } catch(err){
        console.log(err)
    }
}

async function getPosts(dispatch){
    try{

        const res = await fetch('/posts');

        const data = await res.json();
        dispatch({
            type: 'GETPOSTS',
            payload: data
        }); 
                        
    } catch(err){
        console.log("Error");
    }
}

async function chatBot(dispatch,message){
    try{

        const res = await api.post('/chatBot',{message});
        const { chatBotMessages, userMessages, error } = res.data;

        dispatch({
            type: CHAT_BOT,
            payload: { chatBotMessages, userMessages, error }
        }); 
                        
    } catch(err){
        console.log("Error");
    }
}

export default Provider;
export {useMyContext,signUp,addPost,getPosts,signIn,signOut,chatBot};