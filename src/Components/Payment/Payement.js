import React from 'react'
import Stripe from 'react-stripe-checkout'
import axios from 'axios'

const Payment = (props) => {
    
    console.log(props.match.params.subTotal);
    console.log(props.location.param1);
    async function handleToken(token) {
        console.log(token); await axios.post("http://localhost:8080/api/payment/charge", "", {
            headers: {
                token: token.id,
                amount: 500,
            },
        }).then(() => {
            alert("Payment Success");
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <div className="App" >
            <Stripe
                stripeKey="pk_test_51IoQ2qLTLTjtyCAiMJOoTxiymEs2tXlKs1dylU2TnrNfcGGGk5lqssx5FUezwa4F3uWfiYzgBUZ4Cg9CuQMec0QW00gBzPGthB" token={handleToken} />
        </div>
    )
}

export default Payment;