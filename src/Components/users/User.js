import React from 'react'


export const User = (user) => {
   
    const { name, index, surname, email, handleViewUser, handleDelete } = user
   
    

    return (
    <tr>
        <th scope="row">{index}</th>
        <th scope="row">{name}</th>  
        <th scope="row">{surname}</th> 
        <th scope="row">{email}</th>
        <th>
        <button onClick={handleViewUser}  className="btn btn-outline-info button">Ver</button> 
        <button onClick={ handleDelete } className="btn btn-outline-danger ml-10">Eliminar</button>
        </th>   
       </tr>
    )
}