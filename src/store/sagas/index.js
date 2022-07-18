import { all } from "redux-saga/effects";

import aberturasSaga from "./aberturas";
import equipamientoSaga from "./equipamiento";
import terminacionesSaga from "./terminaciones";

export default function* rootSaga() {
  yield all([aberturasSaga(), equipamientoSaga(), terminacionesSaga()]);
}
