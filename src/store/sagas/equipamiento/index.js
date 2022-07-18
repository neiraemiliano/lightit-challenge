import { call, put, takeEvery } from "redux-saga/effects";
import { getCollection } from "../../api/admin/index";
import {
  equipamientoIsFetching,
  equipamientoRequestData,
  equipamientoRequestDataSuccess,
  equipamientoRequestError,
} from "../../slices/equipamiento/equipamiento";

function* getCollectionWorker(action) {
  yield put(equipamientoIsFetching(true));
  try {
    const equipamiento = yield call(getCollection("equipamiento"));

    if (equipamiento && equipamiento.data.length !== 0) {
      yield put(equipamientoRequestDataSuccess(equipamiento.data));
    }
  } catch (e) {
    yield put(equipamientoRequestError(e));
  }
}

function* equipamientoSaga() {
  yield takeEvery(equipamientoRequestData, getCollectionWorker);
}

export default equipamientoSaga;
