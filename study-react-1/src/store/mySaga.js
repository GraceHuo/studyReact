// redux-saga是一个用于管理应用程序副作用的库，类比redux-thunk
// 调用异步操作 call
// 状态更新 （dispatch）put
// 监听 takeEvery

import { call, put, takeEvery } from "redux-saga/effects";

// worker sage
function* loginHandle(props) {
  // const res = yield call(UserService.login, {name:"Grace"})
  yield put({ type: "LOGIN_SUCCESS" });
}

// watcher saga
function* mySaga(props) {
  yield takeEvery("login", loginHandle);
}

export default mySaga;
