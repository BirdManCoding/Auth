import React from 'react';
import ReactDOM from 'react-dom';
import {Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, IconButton} from '@material-ui/core';
import {NavLink} from "react-router-dom"

import Home from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Login from '@material-ui/icons/VpnKey';
import Register from '@material-ui/icons/ExitToApp';
import Blog from '@material-ui/icons/Book';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import useStyles from "./styles"

function SideDrawer(props) {
    const classes = useStyles();
    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}>
            <div className={classes.drawer__Header}>
                <IconButton onClick={props.onClick}>
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


function SideDrawerModal(props){
    return ReactDOM.createPortal(<SideDrawer onClick={props.onClick} open={props.open}/>, document.getElementById("side-drawer"))
}

export default SideDrawerModal;