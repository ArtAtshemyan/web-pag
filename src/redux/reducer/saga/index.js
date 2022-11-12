import {all} from 'redux-saga/effects';
import {watchMainSaga} from './mainSaga'

export default function*  rootSaga(){
    yield all([
        watchMainSaga(),
    ])
}