import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm.js'


import { setError, removeError } from '../../actions/ui'


export const View = (props) => {

    const dispatch = useDispatch()

    const { msgError } = useSelector( state => state.ui )
    const [formValues, handleInputChange, setFormValues] = useForm({
        name:'',
        surname:'',
        password:'',
        password2:'',
        email:'',
    })

    const  {  name, surname, password , password2 , email} = formValues
    
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
                    email:res.email,
                    name:res.name,
                    surname:res.surname
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
                password,
                id:userActualId
            }),
             })
            .then((res) => {
                if (res.status === 200) {
                    alert('The user has been updated')
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
        }  else if ( surname.trim().length === 0 ) {
            dispatch( setError('Surname is required') )
      
            return false
         }  else if ( password !== password2 || password.length < 5 ) {
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
