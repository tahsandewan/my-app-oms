// src/store/counter/reducer.js
import { INCREMENT, DECREMENT,
    // FETCH_USER_START,FETCH_USER_SUCCESS,FETCH_USER_FAIL
   } from '../actions/userAction'
  
  const initialState = {
    value: 0,
    userData:"",
    userDataLoding:false
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, value: state.value + 1 }
      case DECREMENT:
        return { ...state, value: state.value - 1 }
      case "FETCH_USER_START":
        return { ...state, userData: action.payload?.userData,userDataLoding:action.payload.userDataLoding }
      case "FETCH_USER_SUCCESS":
        return { ...state, userData: action.payload?.userData,userDataLoding:action.payload.userDataLoding  }
      case "FETCH_USER_FAIL":
        return { ...state, userData: action.payload ,userDataLoding:action.payload.userDataLoding }
      default:
        return state
    }
  }