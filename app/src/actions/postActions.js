import * as api from "../api/postApi";

export const ACTION_TYPE = {
    CREATE: "CREATE",
    FETCH_ALL: "FETCH_ALL",
}

export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: ACTION_TYPE.FETCH_ALL, payload: data});
    }catch(err){
        console.log(err)
    }
}