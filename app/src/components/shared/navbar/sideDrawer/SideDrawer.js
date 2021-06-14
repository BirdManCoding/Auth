import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Drawer, Divider, List, IconButton} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {ToggleContext} from "../Navbar"
import ListItems from "./listItems/ListItems"
import useStyles from "./styles"

function SideDrawer() {
    const classes = useStyles();
    const toggleContext = useContext(ToggleContext);


    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={toggleContext.toggleState}
        classes={{
          paper: classes.drawerPaper,
        }}>
            <div className={classes.drawer__Header}>
                <IconButton onClick={() => toggleContext.dispatch("CLOSE")}>
                    <ChevronRightIcon color="secondary" />
                </IconButton>
            </div>

            <Divider />
            <List  className={classes.drawer__List}>
                <ListItems/>
            </List>
        </Drawer>
    )
}


function SideDrawerModal(){
    return ReactDOM.createPortal(<SideDrawer/>, document.getElementById("side-drawer"))
}

export default SideDrawerModal;