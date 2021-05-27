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