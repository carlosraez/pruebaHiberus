import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"

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
            .then((res) => res.json())   
            .then((res) => { 
            console.log(res);
              dispatch( finishLoading()) 
              
                if (typeof res.accessToken === 'string') {
            
                    localStorage.setItem('accesToken', res.accessToken)
                    localStorage.setItem('refreshToken', res.refreshToken)
                    dispatch( login (email,password ))
                    dispatch( finishLoading() )
                    dispatch( startLogged() )
 
                }   
                else if (res.statusCode === 404) { 
                    alert(res.message) 
                    dispatch( finishLoading() )
                } 
 
            })
            .catch( (err) => { 
               dispatch( finishLoading()) 
                console.warn(err);
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
            headers: {'Content-Type': 'application/json' }})
            .then((res) => { 

                if (res.status === 409) { 
                    alert('Email Already exists')
                    dispatch( finishLoading())
                }
                if (res.status === 204 ) { 
                    dispatch( finishLoading() )
                    alert('El usuario se ha dado de alta correctamente') }
                    dispatch( startLogged() )
            })   
    }
}

export const login = (email, password, token) => (
 {
        type: types.login,
        payload: {
            email,
            password,
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
               }
        }) 


 export const startLogged = () => (
    {
        type: types.startLogged

    }
 )

 export const finishLogged = () => (
    {
        type: types.finishLogged
        
    }
 )