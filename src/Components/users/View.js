import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm.js'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { setError, removeError } from '../../actions/ui'


export const View = (props) => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )
    const [formValues, handleInputChange] = useForm({
        email:'',
        password:'',
        name:'',
        surname:'',
        password2:'',
    })

    const {email,password, password2, name, surname } = formValues
    const  { handleBackTable, userActualId } = props
     

    useEffect(() => {
        const token = localStorage.getItem('accesToken')
        fetch(`http://51.38.51.187:5050/api/v1/users/${userActualId}`, {
            method: 'GET',
            headers: {
                cors:'no-cors',
                Authorization: `bearer ${token}`
            },
             })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
    }, [userActualId])

    const handleUpdate = () => {
        //actuaizar user
        isFormValid() 
    
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            dispatch( setError('Name is required') )
            
            return false
        } else if ( !validator.isEmail(email) ) {
            dispatch( setError('Email is not valid') )
      
            return false
         } else if ( surname.trim().length === 0 ) {
            dispatch( setError('Surname is required') )
      
            return false
         
          } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
           
            return false
         } 
        
        dispatch( removeError() )
        return true
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email:  </li>
                    <li className="list-group-item">Password:  </li>
                    <li className="list-group-item">Name: </li>
                    <li className="list-group-item">Surname:  </li>
                </ul>
                </div>
            </div>
            <div className="col-6">
              {
                    msgError && (
                        <div className="alert alert-warning">
                        {msgError}
                        </div>
                    )
                }
               <form>
               <div className ="mb-3">
                        <label  className="form-label">New Email</label>
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
                        <label  className="form-label">New Password</label>
                        <input 
                            type="password" 
                            onChange={handleInputChange} 
                            className="form-control" 
                            name="password" 
                            placeholder="Password" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            onChange={handleInputChange} 
                            className="form-control" 
                            name="password2" 
                            placeholder="Repite password" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input 
                            type="text" 
                            onChange={handleInputChange} 
                            className="form-control" 
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
                            className="form-control" 
                            name="surname" 
                            placeholder="Your surname" 
                            autoComplete="off"
                        />
                    </div>
                    <button 
                       className="btn btn-outline-info button" 
                       onClick={ handleBackTable }
                       >
                         Back</button>
                         <button 
                       className="btn btn-outline-info button ml-10" 
                       onClick= { handleUpdate }
                       >
                         Update</button>
               </form> 
            </div>
        </div>
    )
}
