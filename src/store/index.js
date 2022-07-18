import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...middlewares],
});
sagaMiddleware.run(rootSaga);

export default store;
