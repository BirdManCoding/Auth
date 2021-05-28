import React, {useState} from 'react'
import {Typography, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux"

import {createPost} from "../../../actions/postActions"
import makeStyles from "./styles"

export default function PostForm() {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function submitHandler(e){
        e.preventDefault();
        //dont forget validation=P
        dispatch(createPost({title, content}))
        setTitle("")
        setContent("")
    }

    return (
        <div className={classes.postForm}>
           <form autoComplete="off" noValidate onSubmit={submitHandler}>
               <Typography className={classes.postForm__heading} variant="h5">Create a BlogPost:</Typography>
               <TextField className={classes.postForm__field} name="title" variant="outlined" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)}/>
               <TextField className={classes.postForm__field} name="content" variant="outlined" label="Content" fullWidth value={content} onChange={(e) => setContent(e.target.value)}/>
               <Button className={classes.postForm__btn} variant="contained" color="primary" type="submit">Create a BlogPost</Button>
           </form>
        </div>
    )
}
