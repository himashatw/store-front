import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import './Product.css'
function Product({ id, title, image, price, category }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                category: category
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <CurrencyFormat
                    renderText={
                        (value) => (
                            <p
                                className="product__price">
                                <strong>{`${value}`}</strong>
                            </p>
                        )
                    }

                    decimalScale={2}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs. "}

                />

                <p>
                    <small><i>{category}</i></small>
                </p>

            </div>
            <img
                src={image}
                alt={`pic${title}`}
            />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product;