import { call, put, takeEvery } from "redux-saga/effects";
import { getCollection } from "../../api/admin/index";
import {
  aberturasIsFetching,
  aberturasRequestData,
  aberturasRequestDataSuccess,
  aberturasRequestError,
} from "../../slices/aberturas/aberturas";

function* getCollectionWorker(action) {
  yield put(aberturasIsFetching(true));
  try {
    const aberturas = yield call(getCollection("aberturas"));

    if (aberturas && aberturas.data.length !== 0) {
      yield put(aberturasRequestDataSuccess(aberturas.data));
    }
  } catch (e) {
    yield put(aberturasRequestError(e));
  }
}

function* aberturasSaga() {
  yield takeEvery(aberturasRequestData, getCollectionWorker);
}

export default aberturasSaga;
