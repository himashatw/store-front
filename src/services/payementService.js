import axios from 'axios';

//Credit card
const ALL_CARD_PAYEMENT_REST_API_URL = 'http://localhost:8070/api/payment/all-CardPayments';
const ADD_CARD_PAYMENT_REST_API_URL = 'http://localhost:8070/api/payment/add-CardPayment';

//Mobile Pay
const ALL_MOBILE_PAYMENT_API_URL = 'http://localhost:8070/api/payment/all-MobilePayments';
const ADD_MOBILE_PAYMENT_COMPONENT = 'http://localhost:8070/api/payment/add-MoblePayment';

const SEND_CONFIRMATION_MSG = 'http://localhost:8090/sendSms'

class payementService {
    getCardPaymentDetails() {
        return axios.get(ALL_CARD_PAYEMENT_REST_API_URL);
    }

    addCardPayment(payment) {
        return axios.post(ADD_CARD_PAYMENT_REST_API_URL, payment);
    }

    getMobilePaymentDetails() {
        return axios.get(ALL_MOBILE_PAYMENT_API_URL);
    }

    addMobilePaymentDetails(payment) {
        return axios.post(ADD_MOBILE_PAYMENT_COMPONENT, payment);
    }

    sendConfirmationMsg(amount, pinNo) {
        return axios.get(SEND_CONFIRMATION_MSG, {
            params: {
                amount: amount,
                pin : pinNo
        }})
    }

}

export default new payementService();//import object of the class