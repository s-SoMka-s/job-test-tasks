import './Pages.scss'

import React from 'react'

import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import Header from '../shared/components/Header/Header'
import Dashboard from './Dashboard/Dashboard'
import Profile from './Profile/Profile'
import Sidebar from '../shared/components/Sidebar/Sidebar'

export default function Pages() {
    let { path } = useRouteMatch()

    return (
        <div className="pages">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content">
                <Switch>
                    <Route exact path={path}>
                        <Redirect to={`${path}/dashboard`}></Redirect>
                    </Route>
                    <Route exact path={`${path}/dashboard`}>
                        <Dashboard></Dashboard>
                    </Route>
                    <Route exact path={`${path}/profile`}>
                        <Profile></Profile>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
