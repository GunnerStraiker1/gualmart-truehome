import * as types from '../const/actionTypes'

export const getProducts = (payload) =>{
    return{
        type: types.GET_PRODUCTS,
        payload
    }
}

export const getOneProduct = (payload) =>{
    return{
        type: types.GET_ONE_PRODUCT,
        payload
    }
}

export const initializeProduct = (payload) =>{
    return{
        type: types.INITIAL_PRODUCT,
        payload
    }
}