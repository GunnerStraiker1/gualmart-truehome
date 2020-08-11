import { all } from 'redux-saga/effects';
import ProductSaga from './productSaga';


/**
 * Redux Sagas sit between the Actions and Reducers listening for "messages"
 */

export default function* rootSaga(params) {
    console.log(' <---------  Sagas index --------->');
	yield all([
        ProductSaga(),
    ]);
}
