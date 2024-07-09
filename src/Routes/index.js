import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Component/ProductDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
