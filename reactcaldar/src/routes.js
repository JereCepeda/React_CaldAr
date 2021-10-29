import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Users from './components/Users/Listar'
import addUser from './components/Users/addUser'

const Routes = () => {
    return(
        <div>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />   
                <Route path="/users" component={Users} />
                <Route path="/adduser" component={addUser} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;