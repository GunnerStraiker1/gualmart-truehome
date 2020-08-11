import { put, call, takeLatest } from "redux-saga/effects";
import { apiCall } from "../api/api";
import * as types from "../const/actionTypes";

export function* getProductsSaga({payload}) {
    try {
        const results = yield call(
            apiCall,
            'products/list?sort=best_seller&zipcode=94066&page=1&cat_id=0&pref_store=2648%252C5434%252C2031%252C2280%252C5426',
            null,
            {
                "x-rapidapi-host" : "walmart.p.rapidapi.com",
                "x-rapidapi-key" : "b3ab73009fmshd99e6af1296a284p13ce1ajsn85c78cbd1c19" 
            },
            "GET"
        )
        
        yield put({ type: types.GET_PRODUCTS_SUCCESS, results })

    } catch (error) {
        yield put({ type: types.GET_PRODUCTS_ERROR, payload })
    }
}

export function* getOneProductSaga({payload}) {
    try {
        const results = yield call(
            apiCall,
            'products/get-details?usItemId=' + payload.idItem,
            null,
            {
                "x-rapidapi-host" : "walmart.p.rapidapi.com",
                "x-rapidapi-key" : "b3ab73009fmshd99e6af1296a284p13ce1ajsn85c78cbd1c19" 
            },
            "GET"
        )
        yield put({ type: types.GET_ONE_PRODUCT_SUCCESS, results })

    } catch (error) {
        yield put({ type: types.GET_ONE_PRODUCT_ERROR, payload })
    }
}

export default function* productSaga(){
    yield takeLatest(types.GET_PRODUCTS, getProductsSaga);
    yield takeLatest(types.GET_ONE_PRODUCT, getOneProductSaga);
}