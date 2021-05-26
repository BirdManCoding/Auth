import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, IconButton} from '@material-ui/core';
import {NavLink} from "react-router-dom"

import Home from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Login from '@material-ui/icons/VpnKey';
import Register from '@material-ui/icons/ExitToApp';
import Blog from '@material-ui/icons/Book';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {ToggleContext} from "../Navbar"
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
                <ListItem component={NavLink} to="/" button>
                    <ListItemIcon>
                        <Home  color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem component={NavLink} to="/dashboard" button>
                    <ListItemIcon>
                        <Dashboard  color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"}/>
                </ListItem>
                <ListItem component={NavLink} to="/login" button>
                    <ListItemIcon>
                        <Login  color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary={"Login"} />
                </ListItem>
                <ListItem component={NavLink} to="/register" button>
                    <ListItemIcon>
                        <Register  color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={"Register"} />
                </ListItem>
                <ListItem component={NavLink} to="/blog" button>
                    <ListItemIcon>
                        <Blog   color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary={"Blog"} />
                </ListItem>
            </List>
        </Drawer>
    )
}


function SideDrawerModal(){
    return ReactDOM.createPortal(<SideDrawer/>, document.getElementById("side-drawer"))
}

export default SideDrawerModal;