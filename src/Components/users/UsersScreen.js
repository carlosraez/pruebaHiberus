import React from 'react'
import { User } from './User'
import { useCounter } from '../../hooks/useCounter'



export const UsersScreen = () => {

    const data = [{
        name:'Carlos',
        surname:'Raez',
        email:'carlosraez@gmail.com'
    },{
        name:'Carlos',
        surname:'Raez',
        email:'carlosraez@gmail.com'
    },
    {
        name:'Carlos',
        surname:'Raez',
        email:'carlosraez@gmail.com'
    },{
        name:'Carlos',
        surname:'Raez',
        email:'carlosraez@gmail.com'
    },{
        name:'Carlos',
        surname:'Raez',
        email:'carlosraez@gmail.com'
    }]
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
                data.map( (user) => {
                    return   <User key={user.id} {...user}  />
                } )
            }
        </div>
        </div>
    )
}

