import{
    SIGN_UP
} from './actions';

function Reducer(state,action){
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                login: true
            };
        default:
            throw new Error(`Unsopported action ${action.type}`)
    }
}

export default Reducer;