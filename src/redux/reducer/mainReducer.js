const initialState = {
    user: {
        id: '',
        name: '',
        surname: '',
        email: '',
        date: '',
        tell: '',
        password: '',
        photo: ''
    }
}

function MainReducer(state=initialState,action) {
    switch (action.type){
        case 'setUserName':
            return{
                ...state,
                user:{
                    ...state.user,
                    name: action.payload
                }
            }
        case 'setUserId':
            return{
                ...state,
                user:{
                    ...state.user,
                    id: action.payload
                }
            }
        case 'setUserTell':
            return{
                ...state,
                user:{
                    ...state.user,
                    tell: action.payload
                }
            }
        case 'setUserSurname':
            return {
                ...state,
                user: {
                    ...state.user,
                    surname: action.payload
                }
            }
        case 'setUserEmail':
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            }
        case 'setUserDate':
            return {
                ...state,
                user: {
                    ...state.user,
                    date: action.payload
                }
            }
        case 'setUserPassword':
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.payload
                }
            }
        case 'setUserPhoto':
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.payload
                }
            }
        default:
            return state
    }
}

export default MainReducer;