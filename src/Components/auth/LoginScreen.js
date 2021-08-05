import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import Hiberus  from '../../assets/hiberus_0_1.png'
import { startLoginEmailPassword } from '../../actions/actions'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:'',
    })
    
    const { email, password } = formValues
    
    const handleLogin = (e) => { 
  
       e.preventDefault()
         dispatch( startLoginEmailPassword(email, password) ) 

    }

    return (
        <div>
                <div>
                    <img src={Hiberus} alt="Hiberus" width="50" height="400" className="card-img-top" />
                </div>
                <div className ="mb-3">
                        <label  className="form-label">Email</label>
                        <input 
                            type="email" 
                            onChange={handleInputChange} 
                            className="form-control" 
                            name="email" 
                            placeholder="email@gmail.com"
                            autoComplete="off"
                        />
                </div>
                    <div className="mb-3">
                        <label  className="form-label">Passoword</label>
                        <input 
                            type="password" 
                            onChange={handleInputChange} 
                            className="form-control" 
                            name="password" 
                            placeholder="Writte your password" 
                            autoComplete="off"
                        />
                    </div>
                 <div>
                    <Link className="btn btn-outline-info" onClick={handleLogin}>Login </Link>
                </div>
                <div>
                    <Link to="/auth/registrer" className="btn" >Create New Account</Link>
                </div>
        </div>
    )
}
