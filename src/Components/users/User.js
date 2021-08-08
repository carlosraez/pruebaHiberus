import React from 'react'
import  avatar  from '../../assets/avatar.png'

export const User = (user, props) => {
   
    const { name, surname, email } = user
   
    const { handleUpdate, handleDelete  } = props

    return (
    <>
       <div className="card">
                <img  
                src={avatar}
                alt={name} 
                className="img-thumbnail users__card-image "
                />
                <button className="btn btn-link" onClick={ handleUpdate }>Update</button>
                <button className="btn btn-outline-danger" onClick={ handleDelete } >Delete</button>
                <h3>Name: {name} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Last Name:</b> {surname} </li>
                    <li className="list-group-item"><b>Email:</b> {email} </li>
                </ul>
        </div>
    </>
    )
}