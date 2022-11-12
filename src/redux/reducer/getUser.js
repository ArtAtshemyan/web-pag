const initialState = {
    fetchData:{

    }
};

function getUser (state = initialState,action){
    switch (action.type){
        case 'setUser':
            return{
                ...state,
                fetchData: action.payload
            }
        default:
            return state
    }
}
export default getUser;
