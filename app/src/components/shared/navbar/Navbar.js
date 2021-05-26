import React, {Fragment, useState} from 'react'
import {AppBar} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

import Brand from './brand/Brand';
import SideDrawer from "./sideDrawer/SideDrawer"
import useStyles from "./styles"



export default function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };

    const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <Fragment>
            <AppBar position="static" className={classes.navbar}>
                <Brand/>
                <MenuIcon className={classes.navbar__menu} onClick={handleDrawerOpen}/>
            </AppBar>
            <SideDrawer onClick={handleDrawerClose} open={open}/>
        </Fragment>
    )
}
