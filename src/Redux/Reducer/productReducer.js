import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../Actions/productAction";

const initialState ={
loading: false,
data:[]
}

const productReducer =(state=initialState, action={},payload)=>{
    switch(action.type){
        case PRODUCT_REQUEST: {
            return {...state, loading:true}
        }
        case PRODUCT_SUCCESS:{
            return {...state,loading:false,data:action.payload}
        }
        case PRODUCT_ERROR:{
            return{...state,loading:false,}
        }
        default:{
           return{ ...state}
        }
    }
}

export default productReducer;