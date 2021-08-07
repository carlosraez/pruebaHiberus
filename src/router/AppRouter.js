import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { DashboardRoute  } from './DashboardRoute'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux'

export const AppRouter = () => {

    const [cheking, setCheking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
             
            const localMemo = localStorage.getItem('accesToken')
       
            if( localMemo ) {
                setIsAuthenticated( true )
            }
            else {
                setIsAuthenticated( false )
            }
        
        setCheking(false)


    }, [setCheking, setIsAuthenticated])

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