import { call, fork, put, takeLatest } from "redux-saga/effects";
import API_URLS from "../../Constant/apiConstant";
import { getRequest } from "../../Api/axiosClient";
import { PRODUCT_REQUEST, fetchProduct_Error, fetchProduct_Success } from "../Actions/productAction";

function* fetchProductSaga() {
    try {
      const productResponse = yield call(getRequest(
        `${API_URLS.BASE_URL}`
      ));
      console.log(productResponse,'productResponse')
      yield put(fetchProduct_Success(productResponse?.data));
    } catch (e) {
      yield put(fetchProduct_Error(e));
    }
  }

  // watcher saga - MASTER
function* productWatcherSaga() {
    yield takeLatest(PRODUCT_REQUEST, fetchProductSaga);
  }
  
  const productSaga = [fork(productWatcherSaga)];
  
  // exports
  export default productSaga;