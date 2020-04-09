const initialState = {
    users:[
    ],
    loading: true
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_ALL_USERS':
            return {
                users: action.payload,
                loading:false
            }
        default:
            return state
    }
}

export default userReducer