import * as api from "../api/userApi";

import {ACTION_USER_TYPES} from "./actionTypes"

export const register = (newUser) => async(dispatch, getState) => {
    dispatch({type: ACTION_USER_TYPES.IS_LOADING});
    try{
        const {data} = await api.registerUser(newUser);
        dispatch({type: ACTION_USER_TYPES.REGISTER, payload: data});
    }catch(err){
        dispatch({type:  ACTION_USER_TYPES.ERROR, payload: err.response});
    }
}

export const login = (userCredentials) => async(dispatch, getState) => {
    dispatch({type: ACTION_USER_TYPES.IS_LOADING});
    try{
        const {data} = await api.loginUser(userCredentials);
        dispatch({type: ACTION_USER_TYPES.LOGIN, payload: data});
    }catch(err){
        dispatch({type:  ACTION_USER_TYPES.ERROR, payload: err.response});
    }
}

export const logout = () => async(dispatch, getState) => {
    dispatch({type: ACTION_USER_TYPES.IS_LOADING});
    try{
        const {data} = await api.logoutUser();
        console.log(data)
        dispatch({type: ACTION_USER_TYPES.RESET});
    }catch(err){
        dispatch({type:  ACTION_USER_TYPES.ERROR, payload: err.response});
    }
}

export const resetUser = () => async(dispatch, getState) => {
    dispatch({type: ACTION_USER_TYPES.RESET});
}

export const userIsLoggedIn = () => async(dispatch, getState) => {
    dispatch({type: ACTION_USER_TYPES.IS_LOADING});
    try{
        const {data} = await api.isLoggedIn();
        dispatch({type: ACTION_USER_TYPES.IS_LOGGEDIN, payload: data});
    }catch(err){
        dispatch({type: ACTION_USER_TYPES.IS_LOGGEDIN, payload: err});
    }
}

