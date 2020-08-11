import { combineReducers } from "redux";
// import toogleSidebar from './sidebar';
import ProductsReducer from './productsReducers';

const rootReducer = combineReducers({
    // sideBar: toogleSidebar,
    ProductsReducer,
});

export default rootReducer;
