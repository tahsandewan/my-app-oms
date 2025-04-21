const initialState = {
    value: 0,
    userData:"",
    userDataLoding:false
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
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