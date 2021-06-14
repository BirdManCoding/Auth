import {ACTION_USER_TYPES} from "../actions/actionTypes"


const initialState = {
    data: {},
    isLoading: false,
    error: null,
    isLoggedIn: false
}

function userReducers(userState = initialState, action) {
    switch (action.type){
        case ACTION_USER_TYPES.REGISTER:
            return {data: action.payload, isLoading: false, error: null, isLoggedIn: true}
        case ACTION_USER_TYPES.LOGIN:
            return {data: action.payload, isLoading: false, error: null, isLoggedIn: true}                
        case ACTION_USER_TYPES.IS_LOADING:
            return {...userState, isLoading: true}  
        case ACTION_USER_TYPES.ERROR:
            return {...userState, error: action.payload, isLoading: false, isLoggedIn: false}          
        case ACTION_USER_TYPES.RESET:
            return {data: {}, isLoading: false, error: null, isLoggedIn: false}            
        case ACTION_USER_TYPES.IS_LOGGEDIN:
            return {...userState, isLoading: false, error: null, isLoggedIn: action.payload}               
        default: 
            return userState
    }
}


export default userReducers