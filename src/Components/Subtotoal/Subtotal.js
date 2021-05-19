import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../StateProvider';
import './Subtotal.css'
import { Link } from 'react-router-dom';

const Subtotal = () => {
    const [{ basket }] = useStateValue();
    const myTotal = getBasketTotal(basket);
    const toPayment = {
        pathname: `/delivery/${myTotal}`,
        param1 : "Data1"
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    (value) => (
                        <><p>
                            Subtotal ({basket.length} items) : <strong>
                                {`${value}`}
                            </strong>
                        </p>
                        </>
                    )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs. "}
            />
            <Link to={ toPayment}><button>Proceed to pay</button></Link>
        </div>
    );
};

export default Subtotal;