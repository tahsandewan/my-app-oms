// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from '../features/reducers/userReducer'
import { userReducer } from '../features/reducers/userReducer'
import {productReducer} from "../features/reducers/productReducer"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    users:userReducer,
    products:productReducer,
  },
})