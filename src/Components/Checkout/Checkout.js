import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotoal/Subtotal'

const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout___left">
                <img className="checkout__ad" src="https://www.healthyairmart.com/skin1/images/banner-shop.jpg" alt="bannerad" />
                {
                    (basket?.length === 0) ? (
                        <div>
                            <h2>Your Cart is Empty</h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout_title">Your Cart</h2>

                            {
                                basket.map((product, i) => (
                                    <CheckoutProduct
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        category={product.category}
                                        image={product.image}
                                        key={`${product.id}+${i}`}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                )
            }
        </div>
    );
};

export default Checkout;