import { all } from "redux-saga/effects";
import productSaga from "./Saga/productSaga";

function* rootSaga() {
  yield all([
      ...productSaga
  ]);
}

// exports
export default rootSaga;
