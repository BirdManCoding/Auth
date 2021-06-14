import React, {Fragment} from 'react'
import Home from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Login from '@material-ui/icons/VpnKey';
import Register from '@material-ui/icons/ExitToApp';
import Blog from '@material-ui/icons/Book';
import {ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import {NavLink} from "react-router-dom"

import { useDispatch} from "react-redux"
import {useSelector} from "react-redux";

import {logout} from "../../../../../actions/userActions"


function List(){
    const user = useSelector((state) => state.users);
    const itemsLoggedIn= [
        {Home: <Home  color="secondary" key={1}/>},
        {Dashboard: <Dashboard  color="secondary" key={3}/>},
        {Blog: <Blog  color="secondary" key={5}/>},
    ]

    const itemsLoggedOut= [
        {Home: <Home  color="secondary" key={1}/>},
        {Register: <Register  color="secondary" key={2}/>},
        {Login: <Login  color="secondary" key={4}/>},
        {Blog: <Blog  color="secondary" key={5}/>},
    ]
    
   if(user.isLoggedIn){
    const component = itemsLoggedIn.map(item => 
        <ListItem component={NavLink} to={`${Object.keys(item)}`} button key={Object.keys(item)}>
            <ListItemIcon>
                {Object.values(item)}
            </ListItemIcon>
            <ListItemText primary={Object.keys(item)} />
        </ListItem>
    
    )
    return component
   } else {
    const component = itemsLoggedOut.map(item => 
        <ListItem component={NavLink} to={`${Object.keys(item)}`} button key={Object.keys(item)}>
            <ListItemIcon>
                {Object.values(item)}
            </ListItemIcon>
            <ListItemText primary={Object.keys(item)} />
        </ListItem>
    
    )
    return component
   }
}


export default function ListItems() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users);

    function logoutHandler(){
        dispatch(logout())
    }

    return (
        <Fragment>
             <List/>
            {user.isLoggedIn && (
                 <ListItem component={NavLink} to={"/blog"} button onClick={logoutHandler}>
                <ListItemIcon>
                    <Login color="secondary"/>
                </ListItemIcon>
                <ListItemText primary={"Logout"}/>
            </ListItem>
            )}
        </Fragment>

    )
}
