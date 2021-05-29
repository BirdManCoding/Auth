import React from 'react'

import {Typography, Paper, Button} from "@material-ui/core"

import Backdrop from "../backdrop/Backdrop"
import useStyles from "./styles"

export default function ErrorModal(props) {
    const classes = useStyles();
    const message = props.errorMessage || "Ein unerwarteter Fehler ist aufgetreten, bitte versuchen sie es später erneut"
    return (
        <Backdrop>
            <Paper elevation={3} className={classes.errorModal}>
                <Typography variant="h3" className={classes.errorModal__heading}>Error</Typography>
                <Typography variant="body1" className={classes.errorModal__content}>{message}</Typography>
                <Button variant="contained" color="primary" className={classes.errorModal__submit} onClick={props.closeFn}>Ich habe verstanden</Button>
            </Paper>
        </Backdrop>
    )
}
