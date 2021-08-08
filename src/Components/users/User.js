import React from 'react'


export const User = (user) => {
   
    const { name, index, surname, email } = user
   
    

    return (
    <tr>
        <th scope="row">{index}</th>
        <th scope="row">{name}</th>  
        <th scope="row">{surname}</th> 
        <th scope="row">{email}</th>
        <th>
        <button className="btn btn-outline-info">Ver</button> 
        <button className="btn btn-outline-danger">Eliminar</button>
        </th>   
       </tr>
    )
}