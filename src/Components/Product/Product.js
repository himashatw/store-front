import React from 'react';
import './Product.css'
function Product({ id, title, image, price, category }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p
                    className="product__price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>
                <p>
                    <small><i>{category}</i></small>
                </p>
                
            </div>
            <img
                src={image}
                alt={`pic${title}`}
            />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;