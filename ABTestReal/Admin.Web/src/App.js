import './App.scss'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import Auth from './pages/Auth/Auth'
import Pages from './pages/Pages'
import ComponentPreview from './pages/ComponentPreview/ComponentPreview'
//
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/auth"></Redirect>
                </Route>
                <Route exact path="/auth">
                    <Auth></Auth>
                </Route>
                <Route path="/pages">
                    <Pages></Pages>
                </Route>
                <Route exact path="/component-preview">
                    <ComponentPreview></ComponentPreview>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
