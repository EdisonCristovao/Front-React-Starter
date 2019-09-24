import { all } from 'redux-saga/effects';
import cart from './ex/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
