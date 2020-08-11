import { get } from 'lodash'

export const productsResult = (state) => get(state, "ProductsReducer.products")
export const itemProduct = (state) => get(state, "ProductsReducer.itemProduct")