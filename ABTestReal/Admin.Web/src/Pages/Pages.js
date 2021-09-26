import './Pages.scss'

import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Header from '../shared/components/Header/Header'
import Dashboard from './Dashboard/Dashboard'
import Sidebar from '../shared/components/Sidebar/Sidebar'

export default function Pages() {
    let { path } = useRouteMatch()

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
