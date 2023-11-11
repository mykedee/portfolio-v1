// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import { productDetailsReducer, productListReducer } from "./components/reducers/productReducers"
// import { cartReducer } from "./components/reducers/cartReducers"
// import thunk from "redux-thunk"

// const middleware = [thunk]
// const reducers = combineReducers({
//  productList: productListReducer,
//  productDetails: productDetailsReducer,
//  cart: cartReducer
// })

// const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// const initialState = {
//  cart: {
//   cartItems: cartItemFromStorage
//  }
// }

// const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store
