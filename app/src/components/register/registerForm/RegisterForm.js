import React, {useState} from 'react'
import {Typography, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux"


import makeStyles from "./styles"

export default function RegisterForm() {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(e){
        e.preventDefault();
        //dont forget validation=P
        console.log(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className={classes.registerForm}>
           <form autoComplete="off" noValidate onSubmit={submitHandler}>
               <Typography className={classes.registerForm__heading} variant="h5">Register:</Typography>
               <TextField className={classes.registerForm__field} name="email" variant="outlined" label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
               <TextField className={classes.registerForm__field} name="password" variant="outlined" label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
               <Button className={classes.registerForm__btn} variant="contained" color="primary" type="submit">Register</Button>
           </form>
        </div>
    )
}
