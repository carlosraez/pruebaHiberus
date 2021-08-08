import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm.js'
import validator from 'validator'

import { setError, removeError } from '../../actions/ui'


export const View = (props) => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )
    const [formValues, handleInputChange, setFormValues] = useForm({
        email:'',
        name:'',
        surname:'',
    })

    const  { email, name, surname } = formValues
    console.log(formValues);
  
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
                setFormValues({
                    email: res.email,
                    name: res.name,
                    surname: res.surname
                })
                
            })
    }, [userActualId, setFormValues])

    const handleUpdate = () => {
    
        if ( isFormValid() ) {
        const token = localStorage.getItem('accesToken')
        fetch(`http://51.38.51.187:5050/api/v1/users/${userActualId}`, {
            method: 'PUT',
            headers: {
                cors:'no-cors',
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify({
                email,
                name,
                surname,
            }),
             })
            .then((res) => {
                if (res.status === 200) {
                    alert('the user has been updated')
                }
                if (res.status === 404) {
                    alert('User not found')
                }
            })
        }

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
         }
        
        dispatch( removeError() )
        return true
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {email}  </li>
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Surname: {surname} </li>
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
                            value={email}
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
                            value={name}
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
                            value={surname}
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
