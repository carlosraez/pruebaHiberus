import React, { useEffect, useState } from 'react'
import { User } from './User'
import { useCounter } from '../../hooks/useCounter'
import { useSelector } from 'react-redux';

export const UsersScreen = () => {

    const { token } = useSelector(state => state.auth)
    const [users, setUsers] = useState({
        count:0,
        items:[]
    })

    useEffect(() => {
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
    }, [token])

    const { count, items } = users
    console.log(users);

    const {counter,increment, decrement, setCounter} = useCounter(1)

   //paginacion max 2 hojas 
   if (counter < 1) {
       setCounter(1)
   } else if (counter > 2) {
       setCounter(2)
   }
    

    return (
        <div className="container">
            <h1>Users</h1>
            <div className="d-grid gap-2 d-md-flex justify-content">
                <button className="btn btn-primary" type="button" onClick={increment}>+ Pág</button>
                <button className="btn btn-primary" type="button" onClick={decrement}>- Pág</button>
                <p>{counter}</p>
            </div>
          
            <hr></hr>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map( (user) => {
                    return   <User key={user.id} {...user}  />
                } )
            }
        </div>
        </div>
    )
}

