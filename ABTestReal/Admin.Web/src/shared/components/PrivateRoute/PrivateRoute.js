import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                true ? <Component {...props} /> : <Redirect to="/auth" />
            }
        />
    )
}

export default PrivateRoute
