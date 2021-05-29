import {combineReducers} from "redux";
import posts from "./postReducers";
import users from "./userReducer"


export default combineReducers({
    posts, users
})