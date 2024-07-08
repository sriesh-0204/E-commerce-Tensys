import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../Actions/productAction";

const initialState ={
loading: false,
data:[]
}

const productReducer =(state=initialState, action={})=>{
    switch(action.type){
        case PRODUCT_REQUEST: {
            return {...state, loading:true}
        }
        case PRODUCT_SUCCESS:{
            console.log(action,'action')
            return {...state,loading:false,data:action.response}
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