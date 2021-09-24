import './Pages.scss'

import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useHistory,
    useLocation,
} from 'react-router-dom'

import PrivateRoute from '../shared/components/PrivateRoute/PrivateRoute'

import Header from '../shared/components/Header/Header'
import Dashboard from './Dashboard/Dashboard'
import Profile from './Profile/Profile'
import Sidebar from '../shared/components/Sidebar/Sidebar'

export default function Pages() {
    let { path, url } = useRouteMatch()

    return (
        <div className="pages">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content">
                <Switch>
                    <Route exact path={`${path}/dashboard`}>
                        <Dashboard></Dashboard>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
