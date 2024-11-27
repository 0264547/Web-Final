import{
    ADD_POST,
    SIGN_UP,
    GET_POSTS
} from './actions';

function Reducer(state,action){
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
            };
        case ADD_POST:
            return{
                ...state,    
                posts:[...state.posts,action.payload]          
            };
        case GET_POSTS:
            return{
                ...state,
                posts:action.payload
            };
        default:
            throw new Error(`Unsopported action ${action.type}`)
    }
}

export default Reducer;