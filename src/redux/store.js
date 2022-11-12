import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import  createSagaMiddleware from 'redux-saga'
import rootSaga from "./reducer/saga";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    reducer,applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default Store;