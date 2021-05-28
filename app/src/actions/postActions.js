import * as api from "../api/postApi";

import {ACTION_POST_TYPES} from "./actionTypes"

export const getPosts = () => async(dispatch, getState) => {
    dispatch({type: ACTION_POST_TYPES.IS_LOADING});
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: ACTION_POST_TYPES.GET_ALL, payload: data});
    }catch(err){
        dispatch({type: ACTION_POST_TYPES.ERROR, payload: err});
    }
}

export const createPost = (post) => async(dispatch, getState) => {
    dispatch({type: ACTION_POST_TYPES.IS_LOADING});
    try{
        const {data} = await api.createPost(post);
        dispatch({type: ACTION_POST_TYPES.CREATE, payload: data});
    }catch(err){
        dispatch({type: ACTION_POST_TYPES.ERROR, payload: err});
    }
}

export const resetPosts = () => async(dispatch, getState) => {
    dispatch({type: ACTION_POST_TYPES.RESET});
}