import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import ProductDetails from "../Component/ProductDetail";
import Layout from "../Layout";

const Routers = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductDetails />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default Routers;
