import {baseApi} from "../../constant/apiUrl"
export const fetchProductStart = () => ({
    type: 'FETCH_PRODUCT_START',
    payload: {
        productData: '',
        productDataLoding:true
       
      },
  });
export const fetchProductSuccess = (data) => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: {
        productData: data,
        productDataLoding:false

      },
  });
export const fetchProductFail = (error) => ({
    type: 'FETCH_PRODUCT_FAIL',
    payload: error,
    productDataLoding:false

  });
export const fetchProducts = (pageLimit=10,page=1,search="") => {
    
    console.log("ddddddd")
    return async (dispatch, getState) => {
        dispatch(fetchProductStart())
        try {
            let api = `${baseApi}product/all-products?page=${page}&limit=${pageLimit}&search=${search}`
            const res = await fetch(api)
            const data = await res.json()
            dispatch(fetchProductSuccess(data))
        } catch (error) {
           dispatch(fetchProductFail(error))
            
        }

    }
}
   
  