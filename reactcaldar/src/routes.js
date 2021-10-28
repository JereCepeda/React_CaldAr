import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'

const Routes = () => {
    return(
        <div>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />                
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;