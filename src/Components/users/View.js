import React from 'react'
import { useForm } from '../../hooks/useForm.js'

export const View = (props) => {

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:'',
        name:'',
        surname:'',
        password2:'',
    })

    const {email,password, password2, name, surname } = formValues
    const  { handleBackTable } = props

    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">Password: </li>
                    <li class="list-group-item">Name: </li>
                    <li class="list-group-item">Surname: </li>
                </ul>
                </div>
            </div>
            <div className="col-6">
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
                       >
                         Update</button>
               </form> 
            </div>
        </div>
    )
}
