import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import Hiberus  from '../../assets/hiberus_0_1.png'
import { startRegisterEmailPasswordNameSurname } from '../../actions/actions';

export const RegistrerScreen = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:'',
        name:'',
        surname:'',
    })
    
    const { email, password, name, surname } = formValues

    
    const handleRegister = () => { 
        
        dispatch( startRegisterEmailPasswordNameSurname(email, password , name , surname))

    }

    return (
        <div>
                <div className="auth__logo">
                        <img src={Hiberus} alt="Hiberus"  className="card-img-top" />
                </div>
                <div className ="mb-3">
                        <label  className="form-label">Your Email</label>
                        <input 
                            type="email" 
                            onChange={handleInputChange} 
                            className="form-control" 
                            name="email" 
                            placeholder="name@gmail.com"
                            autoComplete="off"
                        />
                </div>
                    <div className="mb-3">
                        <label  className="form-label">Your Password</label>
                        <input 
                            type="password" 
                            onChange={handleInputChange} 
                            className="form-control" n
                            name="password" 
                            placeholder="Your password" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input 
                            type="text" 
                            onChange={handleInputChange} 
                            className="form-control" n
                            name="name" 
                            placeholder="Your name" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Surname</label>
                        <input 
                            type="text" 
                            onChange={handleInputChange} 
                            className="form-control" n
                            surname="surname" 
                            placeholder="Your surname" 
                            autoComplete="off"
                        />
                    </div>
                 <div>
                    <button className="btn btn-outline-info boton" onClick={handleRegister}>Register</button>
                </div>
                <div>
                    <Link to="/auth/login" className="btn" >Already have and acount?</Link>
                </div>
        </div>
    )
}
