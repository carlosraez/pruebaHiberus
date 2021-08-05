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
        
        setTimeout(() => {

            dispatch( register(email,password,name, surname) )
            
        }, 3500);

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
