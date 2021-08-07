import { types } from "../types/types"
import { startLoading, finishLoading } from "./ui"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
           dispatch( startLoading() )
           fetch('http://51.38.51.187:5050/api/v1/auth/log-in', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json' },})
            .then( (res) => { res.json() })
            .then((res) => { 
              dispatch( finishLoading()) 
              if (typeof res.accessToken === 'string') {
                  
                    localStorage.setItem('accesToken', res.accessToken)
                    dispatch( login (email,password, res.accessToken))
                    dispatch( finishLoading() )
                }  
                
                else if (res.statusCode === 404) { 
                    alert(res.message) 
                    dispatch( finishLoading() )
                } 
 
            })
            .catch( (err) => { 
                dispatch( finishLoading()) 
                console.log(err);
                })
            let token = localStorage.getItem('accesToken')
            
            fetch('http://51.38.51.187:5050/api/v1/users/me', {
            method: 'GET',
            headers: {
                Authorization: `bearer ${token}`
            },
             })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                dispatch( finishLoading() )
            })
            
            

    }
}


export const startRegisterEmailPasswordNameSurname = (email, password, name, surname) => {
    return (dispatch) => {
       dispatch( startLoading() )
       fetch('http://51.38.51.187:5050/api/v1/auth/sign-up', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                name,
                surname,
            }),
            headers: {
                'Content-Type': 'application/json' },})
            .then((res) => res.json())
            .then((res) => { 
                console.log(res);
                if (res.statusCode === 409) { 
                    alert(res.message)
                    dispatch( finishLoading())
                }
                if (res.statusCode === 200 ) { 
                    dispatch( finishLoading() )
                    alert('El usuario se ha dado de alta correctamente') }
                
            })
            .then(() => dispatch( register(email,password,name, surname,) ))
            
    }
}

export const login = (email, password, token) => (
 {
        type: types.login,
        payload: {
            email,
            password,
            token,
        }
    }) 
    

    export const register = (email, password, name, surname, token) => (
        {
               type: types.login,
               payload: {
                   email,
                   password,
                   name,
                   surname,
                   token
               }
        }) 
