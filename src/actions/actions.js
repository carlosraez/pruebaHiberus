import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
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
               
                if (typeof res.accessToken === 'string') {
                  
                    localStorage.setItem('accesToken', res.accessToken)
                  
                } 
                if (typeof res.refreshToken === 'string') {
                    localStorage.setItem('refreshToken', res.refreshToken)
                }
               
                if (res.statusCode === 404) { alert(res.message)}
            
            })
            .then(() => dispatch( login (email,password,) ))

    }
}


export const startRegisterEmailPasswordNameSurname = (email, password, name, surname) => {
    return (dispatch) => {
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
                if (res.statusCode === 409) { alert(res.message)}
                if (res.statusCode === 200 ) { alert('El usuario se ha dado de alta correctamente') }
            
            })
            .then(() => dispatch( register(email,password,name, surname) ))
            
    }
}

export const login = (email, password) => (
 {
        type: types.login,
        payload: {
            email,
            password,
        }
    }) 
    

    export const register = (email, password, name, surname) => (
        {
               type: types.login,
               payload: {
                   email,
                   password,
                   name,
                   surname
               }
        }) 
