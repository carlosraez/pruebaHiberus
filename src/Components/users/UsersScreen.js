import React, { useEffect, useState } from 'react'
import { User } from './User'
import { View } from './View'

export const UsersScreen = () => {

    
    const [users, setUsers] = useState({
        count:0,
        items:[],
    })

    const [view, setView ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('accesToken')
        fetch('http://51.38.51.187:5050/api/v1/users', {
            method: 'GET',
            headers: {
                
                Authorization: `bearer ${token}`
            },
             })
            .then((res) => res.json())
            .then((res) => {
                setUsers({
                    count:res.count,
                    items:res.items
                })
            })
    },)

    const { count, items } = users
       
    const handleUpdate = (id) => {
        
        setView(true)
    }

    const handleDelete = (id) => {
        const token = localStorage.getItem('accesToken')
        fetch(`http://51.38.51.187:5050/api/v1/users/${id}`, {
            method: 'GET',
            headers: {
                
               Authorization: `bearer ${token}`
            },
             })
            .then((res) => {
                console.log(res);
                if (res.status === 204) {
                    alert('the user has been deleted')
                }
                if (res.status === 404) {
                    alert('User not found')
                }
            })
            
    }
   
    return (
        <div className="container">
            <h1>Users</h1>
            <div className="d-grid gap-2 d-md-flex justify-content">
                Total de Usuarios
                <p>{count}</p>
            </div>
          
            <hr></hr>
            {
               view ? <View 
               
               handleBackTable={() => {setView(false) }} /> 
               : 
               (
                 <table className="table">
                                <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col">email</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                </thead>
                        <tbody>
                        {
                            items.map( (user,i) => {
                                return  ( 
                                <User 
                                    key={user.id} 
                                    index={i + 1}
                                    {...user} 
                                    handleViewUser={() =>  handleUpdate(user.id) } 
                                    handleDelete={() =>  handleDelete(user.id) }
                                />)
                            } )
                        }
                        </tbody>
                </table>    
               )
            }
            
        </div>
    )
}

