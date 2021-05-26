import {ACTION_TYPE} from "../actions/postActions"

const reducer = (postsState = [], action) => {
    switch (action.type) {
        case ACTION_TYPE.CREATE:
            return postsState;
        case ACTION_TYPE.FETCH_ALL:
            return action.payload    
        default:
            return postsState;    
    }
}

export default reducer