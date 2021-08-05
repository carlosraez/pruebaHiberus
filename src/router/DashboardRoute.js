import React from 'react'
import { Route,Switch, Redirect } from "react-router-dom";
import { Navbar } from "../Components/navbar/navbar";
import { UsersScreen } from '../Components/users/UsersScreen'

export const DashboardRoute = () => {
    return (
        <>
            <Navbar /> 
            <div className="container mt-2">
                <Switch>
                <Route exact path="/users" component={ UsersScreen } />
                <Redirect to="/users" />
                </Switch>
            </div>         
        </>
    )
}