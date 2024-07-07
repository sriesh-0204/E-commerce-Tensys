import React from "react";
import { useSelector } from "react-redux";
import API_URLS from "../../Constant/apiConstant";

const Home =()=>{
    const countFromRedux = useSelector((state) => state.product);
    console.log(countFromRedux,'tesd')
    console.log(API_URLS,'api')
    return(
        <>
        home
        </>
    )
}

export default Home;