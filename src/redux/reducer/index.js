import {combineReducers} from "redux";
import mainReducer from "./mainReducer";
import getUser from "./getUser";

const reducer = combineReducers({
    registration: mainReducer,
    fetchUser: getUser,
})
export default reducer;