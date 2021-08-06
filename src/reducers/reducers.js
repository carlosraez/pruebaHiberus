import { types } from '../types/types'

export const authReducer = (state = { }, action) => {
    switch (action.type) {
        case types.login: 
            return {
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.token
            
            }
        
        case types.register: 
            return {
                email: action.payload.email,
                password: action.payload.password,
                name:action.payload.name,
                surname:action.payload.surname,
                token: action.payload.token,
            }
        
        case types.logout: 
            return { }
            
        default:
            return state
    }
}