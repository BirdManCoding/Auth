import React, {useState} from 'react'
import {Typography, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux"

import {login} from "../../../actions/userActions"
import makeStyles from "./styles"

export default function LoginForm() {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(e){
        e.preventDefault();
        //dont forget validation=P
        dispatch(login({email, password}))
        setEmail("")
        setPassword("")
    }

    return (
        <div className={classes.loginForm}>
           <form autoComplete="off" noValidate onSubmit={submitHandler}>
               <Typography className={classes.loginForm__heading} variant="h5">Login:</Typography>
               <TextField className={classes.loginForm__field} name="email" variant="outlined" label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
               <TextField className={classes.loginForm__field} name="password" variant="outlined" label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
               <Button className={classes.loginForm__btn} variant="contained" color="primary" type="submit">Login</Button>
           </form>
        </div>
    )
}
