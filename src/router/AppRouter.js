import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { DashboardRoute  } from './DashboardRoute'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
                <Switch>
                         <Route 
                                path='/auth'
                                component={AuthRouter}
                            />
                            <Route 
                                exact path='/users'
                                component={DashboardRoute}
                            />
                         <Redirect to="/auth/login" />
                </Switch>
        </Router>
    )
}