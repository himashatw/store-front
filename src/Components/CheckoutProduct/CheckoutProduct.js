import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, title, image, price, category }) => {

    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;