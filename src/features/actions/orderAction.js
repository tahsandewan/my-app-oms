import {baseApi} from "../../constant/apiUrl"
export const createOrderStart = () => ({
    type: 'CREATE_ORDER_START',
    payload: {
        productData: '',
        productDataLoding:true
       
      },
  });
export const createOrderSuccess = (data) => ({
    type: 'CREATE_ORDER_SUCCESS',
    payload: {
        productData: data,
        productDataLoding:false

      },
  });
export const createOrderFail = (error) => ({
    type: 'CREATE_ORDER_FAIL',
    payload: error,
    productDataLoding:false

  });
export const createOrders = (createData) => {
    
    console.log("ddddddd")
    return async (dispatch, getState) => {
        dispatch(createOrderStart())
        try {
            let api = `${baseApi}order/all-products?page=${page}&limit=${pageLimit}&search=${search}`
            const res = await fetch(api)
            const data = await res.json()
            dispatch(createOrderSuccess(data))
        } catch (error) {
           dispatch(createOrderFail(error))
            
        }

    }
}
   
  