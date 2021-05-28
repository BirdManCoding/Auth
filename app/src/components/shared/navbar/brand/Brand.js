import React from 'react'
import {Typography} from "@material-ui/core"
import unicornBrand from "../../../../images/unicorn.png";
import useStyles from "./styles"

export default function Brand() {
    const classes = useStyles();
    return (
        <div className={classes.brand}>
            <img src={unicornBrand} alt="uni the unicorn" className={classes.brand__image}/>
            <Typography variant="h4" component="strong"  className={classes.brand__heading}>Uni the Unicorn</Typography >
        </div>
    )
}
