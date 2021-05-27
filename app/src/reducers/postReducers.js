import {ACTION_POST_TYPES} from "../actions/actionTypes"


const initialState = {
    data: [],
    isLoading: false,
    error: null
}

function postReducers(postState = initialState, action) {
    switch (action.type){
        case ACTION_POST_TYPES.GET_ALL:
            return {data: action.payload, isLoading: false, error: null}
        case ACTION_POST_TYPES.IS_LOADING:
            return {...postState, isLoading: true}  
        case ACTION_POST_TYPES.ERROR:
            return {...postState, error: action.payload, isLoading: false}          
        default: 
            return postState
    }
}


export default postReducers