const PRODUCT_REQUEST ='PRODUCT_REQUEST';
const PRODUCT_SUCCESS ='PRODUCT_SUCCESS';
const PRODUCT_ERROR ='PRODUCT_ERROR';

const fetchProduct_Request =(payload)=>{
    return{
        type:PRODUCT_REQUEST,
        payload
    };
};

const fetchProduct_Success =(response)=>{
    return{
        type: PRODUCT_SUCCESS,
        Response
    };
};

const fetchProduct_Error =(error)=>{
    return{
        type: PRODUCT_ERROR,
        error,
    };
};

export {
    PRODUCT_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_ERROR,
    fetchProduct_Error,
    fetchProduct_Success,
    fetchProduct_Request
}