import React  from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { finishLogged } from '../../actions/actions';
import Hiberus from '../../assets/avatar.png'

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
            <img src={Hiberus} alt="Hiberus-logo" width="60" height="50" className="d-inline-block align-text-top" />
                <div className="navbar-nav">
                        <Link className="nav-link" onClick={handleLogout} aria-current="page" to="/login">LogOut</Link>
                </div>
            </div>
        </nav>
    )
}
