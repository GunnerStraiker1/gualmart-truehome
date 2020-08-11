import * as types from '../const/actionTypes'

const initialState={
    itemProduct: null
}

export default function(state = initialState, action){

    switch (action.type) {

        case types.GET_PRODUCTS:
            return{
                ...state,
                itemProduct: undefined
            }

        case types.GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.results.items,
                itemProduct: null
            }
        
        case types.GET_PRODUCTS_ERROR:
            return{
                ...state,
                itemProduct: null
            }

        case types.GET_ONE_PRODUCT_SUCCESS:
            return{
                ...state,
                itemProduct: action.results.data.productByProductId
            }
        
        case types.GET_ONE_PRODUCT_ERROR:
            return{
                ...state
            }

        case types.INITIAL_PRODUCT:
            return{
                ...state,
                itemProduct: null
            }

        default:
            return { ...state }
    }
}