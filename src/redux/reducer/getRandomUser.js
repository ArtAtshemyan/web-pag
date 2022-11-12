const initialState = {
    fetchRandomUser:{

    }
};


function getRandomUser (state = initialState,action) {
    switch (action.type){
        case 'setRandomUser':
            return{
                ...state,
                fetchRandomUser: action.payload
            }
        default:
            return state
    }
}
export default getRandomUser;