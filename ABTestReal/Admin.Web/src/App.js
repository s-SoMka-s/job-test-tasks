import './App.scss'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom'

import Auth from './pages/Auth/Auth'
import Pages from './pages/Pages'
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute'
//
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/pages"></Redirect>
                </Route>
                <Route exact path="/auth">
                    <Auth></Auth>
                </Route>
                <PrivateRoute
                    exact
                    path="/pages"
                    component={Pages}
                ></PrivateRoute>
            </Switch>
        </Router>
    )
}

export default App
