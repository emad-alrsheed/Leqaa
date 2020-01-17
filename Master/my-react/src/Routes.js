
import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Login from './Component/login/login'
import Register from './Component/login/Register'
import LandingPage from './Component/LandingPage'
import Dashboard from './Home/Dashbord'

class Routes extends Component {
    render() {
        return <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>

            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />



        </BrowserRouter>

    }




}

export default Routes