import {ACTION_USER_TYPES} from "../actions/actionTypes"


const initialState = {
    data: {},
    isLoading: false,
    error: null
}

function postReducers(userState = initialState, action) {
    switch (action.type){
        case ACTION_USER_TYPES.REGISTER:
            return {data: action.payload, isLoading: false, error: null}
        case ACTION_USER_TYPES.LOGIN:
            return {data: action.payload, isLoading: false, error: null}                
        case ACTION_USER_TYPES.IS_LOADING:
            return {...userState, isLoading: true}  
        case ACTION_USER_TYPES.ERROR:
            return {...userState, error: action.payload, isLoading: false}          
        case ACTION_USER_TYPES.RESET:
            return {data: {}, isLoading: false, error: null}                  
        default: 
            return userState
    }
}


export default postReducers