import { put, takeEvery} from 'redux-saga/effects';

function* workerGetUser (action){
    console.log(action)
    const fetchingUser = JSON.parse(localStorage.getItem('user'));
    yield put({
        type: 'setUser',
        payload: fetchingUser[0]
    })
}

export function* watchMainSaga() {

    yield takeEvery('getUser',workerGetUser)

}