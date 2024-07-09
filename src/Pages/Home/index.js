import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct_Request } from "../../Redux/Actions/productAction";
import { Rate, Spin } from "antd";
import './index.scss';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Images } from "../../assets/images";
import ProductDetails from "../../Component/ProductDetail";

class Home extends Component {
    state = {
        searchQuery: '',
        filteredProducts: [],
        productItem: ''
    };

    componentDidMount() {
        this.props.fetchProduct_Request();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.productList !== this.props.productList) {
            this.setState({ filteredProducts: this.props.productList });
        }
    }

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSearchClick = () => {
        const filtered = this.props.productList.filter(product =>
            product.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );
        this.setState({ filteredProducts: filtered });
    };

    productDetails = (data) => {
        this.setState({ productItem: data });
        console.log(this.state.productItem, 'productItem');
        console.log(data, 'data');
    }

    render() {
        const { loading, error } = this.props;
        const { searchQuery, filteredProducts, productItem } = this.state;

        return (
            <div className="product">
                <div className="product-container">
                    {filteredProducts &&
                        <div className="product-search-bar mb-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={this.handleSearchChange}
                            />
                            <button onClick={this.handleSearchClick}><FaMagnifyingGlass /></button>
                        </div>
                    }
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
                                    <div className="product-list w-auto lg:w-1/4" key={productData.id} onClick={() => this.productDetails(productData)}>
                                        <div className="product-image">
                                            <img src={productData.image} alt={productData.title} />
                                        </div>
                                        <div className="product-text p-4">
                                            <h4>{productData.title}</h4>
                                            <div className="product-star flex justify-between">
                                                <div className="product-price">
                                                    {productData.price}</div>
                                                <Rate disabled allowHalf defaultValue={productData.rating.rate} />

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
                <ProductDetails product={productItem} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productList: state.product.data,
    loading: state.product.loading,
    error: state.product.error
});

const mapDispatchToProps = {
    fetchProduct_Request
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
