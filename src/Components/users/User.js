import React from 'react'
import  avatar  from '../../assets/avatar.png'

export const User = (user) => {
   
    const { name, surname, email } = user

    return (
    <>
       <div className="card">
                <img  
                src={avatar}
                alt={name} 
                className="img-thumbnail"
                />
                <h3>Name: {name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Last Name:</b> {surname} </li>
                    <li className="list-group-item"><b>Email:</b> {email} </li>
                </ul>
        </div>
    </>
    )
}