import React  from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { finishLogged } from '../../actions/actions';


export const Navbar = () => {

    const dispatch = useDispatch()
    const { logged } = useSelector(state => state.auth)

   const  handleLogout = () => {
        dispatch( finishLogged() )
        console.log(logged);
        localStorage.removeItem('accesToken', 'refreshToken')
    }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-nav">
                        <Link className="nav-link" onClick={handleLogout} aria-current="page" to="/login">Logout</Link>
                </div>
            </div>
        </nav>
    )
}
