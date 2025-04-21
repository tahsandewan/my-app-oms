import {baseApi} from "../../constant/apiUrl"

// src/store/counter/actions.js
export const INCREMENT = 'counter/increment'
export const DECREMENT = 'counter/decrement'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const fetchUserStart = () => ({
    type: 'FETCH_USER_START',
    payload: {
        userData: '',
        userDataLoding:true
       
      },
  });
export const fetchUserSuccess = (data) => ({
    type: 'FETCH_USER_SUCCESS',
    payload: {
        userData: data,
        userDataLoding:false

      },
  });
export const fetchUserFail = (error) => ({
    type: 'FETCH_USER_FAIL',
    payload: error,
    userDataLoding:false

  });
export const fetchUsers = (pageLimit=10,page=1,search="") => {
    
    console.log("ddddddd")
    return async (dispatch, getState) => {
        dispatch(fetchUserStart())
        try {
            let api = `${baseApi}all-users?page=${page}&limit=${pageLimit}&search=${search}`
            const res = await fetch(api)
            const data = await res.json()
            dispatch(fetchUserSuccess(data))
        } catch (error) {
           dispatch(fetchUserFail(error))
            
        }

    }
}
   
  