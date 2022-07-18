import { call, put, takeEvery } from "redux-saga/effects";
import { getCollection } from "../../api/admin/index";
import {
  terminacionesIsFetching,
  terminacionesRequestData,
  terminacionesRequestDataSuccess,
  terminacionesRequestError,
} from "../../slices/terminaciones/terminaciones";

function* getCollectionWorker(action) {
  yield put(terminacionesIsFetching(true));
  try {
    const terminaciones = yield call(getCollection("terminaciones"));

    if (terminaciones && terminaciones.data.length !== 0) {
      yield put(terminacionesRequestDataSuccess(terminaciones.data));
    }
  } catch (e) {
    yield put(terminacionesRequestError(e));
  }
}

function* terminacionesSaga() {
  yield takeEvery(terminacionesRequestData, getCollectionWorker);
}

export default terminacionesSaga;
