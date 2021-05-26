import React, {useContext} from 'react'
import useStyles from "./styles"
import MenuIcon from '@material-ui/icons/Menu'
import {AppBar} from '@material-ui/core'

import {ToggleContext} from "../Navbar"
import Brand from '../brand/Brand';


export default function Bar() {
    const classes = useStyles();
    const toggleContext = useContext(ToggleContext);
    return (
        <AppBar position="static" className={classes.navbar}>
            <Brand/>
            <MenuIcon className={classes.navbar__menu} onClick={() => toggleContext.dispatch("OPEN")}/>
        </AppBar>
    )
}
