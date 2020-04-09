const initialState = {
    authError : null
}

const authReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'SIGN_UP_SUCCESS':
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_FAIL':
            return{
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null
            }
        case 'LOGIN_FAIL':
            return{
                ...state,
                authError: action.err.message
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state
        default:
            return state
    }
}
export default authReducer