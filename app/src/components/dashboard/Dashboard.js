import React from 'react'
import {Typography, Paper} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux"

import {resetPosts} from "../../actions/postActions"
import ErrorModal from "../shared/containers/errorModal/ErrorModal"
import PostForm from "./postForm/PostForm"
import makeStyles from "./styles"

export default function Dashboard() {
    const classes = makeStyles();
    const error = useSelector((state) => state.posts.error);
    const dispatch = useDispatch();
    
    function closeErrorModal(){
        dispatch(resetPosts())
    }

    return (
        <Paper elevation={3} className={classes.dashboard}>
            <Typography variant="h3">Dashboard</Typography>
            <Typography variant="body1" className={classes.dashboard__content}>I'm baby cloud bread kickstarter biodiesel slow-carb fanny pack selfies tacos pour-over hot chicken green juice single-origin coffee. Activated charcoal lyft four loko, whatever craft beer four dollar toast you probably haven't heard of them forage vegan. Biodiesel palo santo direct trade cred echo park, celiac viral meh photo booth. Slow-carb kinfolk offal street art, gastropub poutine helvetica prism celiac chicharrones pickled pabst letterpress fashion axe shoreditch. Forage knausgaard pinterest readymade hashtag portland photo booth mlkshk. Cardigan yuccie unicorn palo santo, tofu selvage forage tumblr DIY brooklyn tousled viral before they sold out succulents meggings.</Typography>
            <hr/>
            <PostForm/>
            {error && <ErrorModal closeFn={closeErrorModal}/>}
        </Paper>
    )
}
