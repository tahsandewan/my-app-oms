const initialState = {
    value: 0,
    userData:"",
    userDataLoding:false,
    productData:[],
    productDataLoding:false
  }
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USER_START":
        return { ...state, userData: action.payload?.userData,userDataLoding:action.payload.userDataLoding }
      case "FETCH_USER_SUCCESS":
        return { ...state, userData: action.payload?.userData,userDataLoding:action.payload.userDataLoding  }
      case "FETCH_USER_FAIL":
        return { ...state, userData: action.payload ,userDataLoding:action.payload.userDataLoding }
    case "FETCH_PRODUCT_START":
        return Object.assign({}, state, action.payload);
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({}, state, action.payload);
        case "FETCH_PRODUCT_FAIL":
            return Object.assign({}, state, action.payload);
      default:
        return state
    }
  }