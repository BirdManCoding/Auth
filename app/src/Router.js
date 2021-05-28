import React, {Fragment} from 'react'
import { Switch, Route} from "react-router-dom"

import Main from "./components/shared/containers/Main"
import Navbar from "./components/shared/navbar/Navbar"
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Blog from "./components/blog/Blog"

function Router() {
    return (
        <Fragment>
            <Navbar/>
            <Main>
                <Switch>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Main>
        </Fragment>
    )
}

export default Router
