import { call, put, takeEvery } from 'redux-saga/effects'
import http from '@/util/request'
import { FETCH_REQUEST, REQUEST_SUCCESS, REQUEST_FAIL } from '@/actions/ActionTypes';

function* fetchRequest({ payload }) {
   const { config, resolve, reject } = payload;
   try {
      const res = yield call(http, config);
      if (res && res.data) {
         yield put({ type: REQUEST_SUCCESS, data: res.data });
         resolve(res.data)
      } else {
         yield put({ type: REQUEST_FAIL, message: res.message });
         reject(res)
      }
   } catch (e) {
      yield put({ type: REQUEST_FAIL, message: e.message });
      reject(e)
   }
}


function* rooterSaga() {
   yield takeEvery(FETCH_REQUEST, fetchRequest);
}

export default rooterSaga; 