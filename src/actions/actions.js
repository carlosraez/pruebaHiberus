import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
        setTimeout(() => {

            dispatch( login(email,password) )
            
        }, 3500);

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
                surname
            }),
            headers: {
                'Content-Type': 'application/json' },})
            .then((res) => res.json())
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
