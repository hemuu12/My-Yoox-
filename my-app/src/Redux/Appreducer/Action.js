import * as types from "./ActionTypes.js"
import axios from "axios"


// ...............isLoading state

export const getProductsLoading=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}

// .................................

// ...................Success state

export const getProductsSuccess=(payload)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
// .................................

// .................isError state

export const getProductsFailure=()=>{
    return {
        type:types.GET_PRODUCTS_FAILURE
    }
}
// .......................

// api call....Success/error/loading...........
              
export const getProducts=(params)=>async (dispatch)=>{
    dispatch(getProductsLoading())
    try {
        const r = await axios.get(`https://yoox-server.vercel.app/clothing`,params)
        dispatch(getProductsSuccess(r.data))
    } catch (err) {
        dispatch(getProductsFailure())
    }
    
}
// .......................

