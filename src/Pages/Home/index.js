import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct_Request } from "../../Redux/Actions/productAction";
import { Rate, Spin } from "antd";
import './index.scss';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Images } from "../../assets/images";

const Home = () => {
    const dispatch = useDispatch();
    const { data: productList, loading, error } = useSelector((state) => state.product);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProduct_Request());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(productList);
    }, [productList]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        const filtered = productList.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="product">
            <div className="product-container">
                <div className="product-search-bar mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange} 
                    />
                    <button onClick={handleSearchClick}><FaMagnifyingGlass /></button>
                </div>
                {loading ? (
                    <div className="loader">
                        <Spin size="large" />
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>Failed to load products. Please try again later.</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((productData) => (
                                <div className="product-list w-1/4" key={productData.id}>
                                    <div className="product-image">
                                        <img src={productData.image} alt={productData.title} />
                                    </div>
                                    <div className="product-text p-4">
                                        <h4>{productData.title}</h4>
                                        <h5>{productData.category}</h5>
                                        <p className="product-description">
                                            {productData.description}
                                        </p>
                                        <p>
                                            Price: {productData.price}
                                        </p>
                                        <div className="product-star flex">
                                            <Rate allowHalf defaultValue={productData.rating.rate} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <img src={Images.NO_Data} className="product-no-data" alt="No data" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
