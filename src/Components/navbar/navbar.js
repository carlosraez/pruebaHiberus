import React,  { useState }  from 'react'
import { Link } from 'react-router-dom'
import Hiberus from '../../assets/avatar.png'


export const Navbar = () => {

   const [userAuth] = useState(true)

   const  handleLogout = () => {
         
        localStorage.removeItem('userValid')
    }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <img src={Hiberus} alt="Hiberus-logo" width="60" height="50" className="d-inline-block align-text-top" />
                <div className="navbar-nav">
                        {
                            userAuth ? <Link className="nav-link" onClick={handleLogout} aria-current="page" to="/login">LogOut</Link>
                            :
                            <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                        }
                </div>
            </div>
        </nav>
    )
}
