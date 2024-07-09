import React from 'react';
import { Rate, Spin } from "antd";

const ProductDetails = ({ product }) => {
    if (!product) {
        return <div>Select a product to see details</div>;
    }

    return (
        <div className="product flex">
            <div className='product-container flex'>
                <div className='product-detail-image flex items-center'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-detail-text p-4">
                    <h4 className='product-tilte'>{product.title}</h4>
                    <div className="product-star flex mb-4">
                        <Rate disabled allowHalf defaultValue={product.rating.rate} />
                    </div>
                    <p className='mb-4 product-price'>
                        <span className='product-subtitle'>Price :</span>
                        ₹{product.price}
                    </p>
                    <h5 className='mb-4'><span className='product-subtitle'>category :</span>{product.category}</h5>
                    <h5 className="product-description">
                        {product.description}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
