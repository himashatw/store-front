import React, { Component } from 'react';
import PayementService from '../../services/payementService';
import { withRouter, Link } from 'react-router-dom';
import '../Item/Form.css';

class AddCardPaymentComponent extends Component {

    constructor(props) {

        const myTotal = props.match.params.subTotal;
        console.log("add card" + myTotal);


        super(props);
        this.state = {
            cardNo: '',
            name: '',
            cvcNo: '',
            amount: props.match.params.subTotal
        }



        this.changeCardNumber = this.changeCardNumber.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeCVCNumber = this.changeCVCNumber.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.savePayment = this.savePayment.bind(this);
        // this.goToCardPayment = this.goToCardPayment.bind(this);


    }


    changeCardNumber = (event) => {
        this.setState({ cardNo: event.target.value });
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changeCVCNumber = (event) => {
        this.setState({ cvcNo: event.target.value });
    }

    changeAmount = (event) => {
        this.setState({ amount: event.target.value });
    }

    savePayment = (event) => {
        event.preventDefault();
        //If invoked when the cancelable attribute value is true, 
        //and while executing a listener for the event with passive set to false, 
        //signals to the operation that caused event to be dispatched that it needs to be canceled.

        let payement = { cardNo: this.state.cardNo, name: this.state.name, cvcNo: this.state.cvcNo, amount: this.state.amount };
        console.log('Card payement =>' + JSON.stringify(payement));

        PayementService.addCardPayment(payement).then(response => {
            alert("Your payment was saved💯✅ .Check your E-Mail for more information❗.")
        }).catch(err =>
            alert("🔴 Please check again your payement details❗.")

        );


    }

    canceled = () => {
        var x = this.state.amount;
        this.props.history.push(`/checkout`);
    }

    goToCardPayment = () => {
        var x = this.state.amount;
        this.props.history.push(`/addCardPayment/${x}`);
    }

    goToMobilePayment = () => {

        var x = this.state.amount;
        this.props.history.push(`/addMobilePayment/${x}`);
        console.log("@card pay" + x);
    }


    render() {

        return (
            <div className="bg-img">

                <br></br>
                <center>

                    <button className="cardBtn cardBtn_Effect " onClick={this.goToCardPayment}> Payment Via Credit Card </button>



                    <button className="mobBtn mobBtn_Effect" onClick={this.goToMobilePayment} style={{ marginLeft: "10px" }}> Payment Via Mobile Phone   </button>

                </center>
                <center><h2 className="font1">Credit Card <div className="font2">PAYMENTS</div></h2></center>
                <br></br>
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <br></br>
                    <div className="card-title">
                        <center><h3><i> Add Credit Card Details Here</i> 💳</h3> </center>
                    </div>
                    <div className="card-body">
                        <div className="form-group row">

                            <div className="container">

                                <form>
                                    <div className="container">
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Card Number </label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.cardNo} name="cardNumber" placeholder="Enter Card Number" class="form-control" onChange={this.changeCardNumber} required />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Name </label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.name} name="name" placeholder="Card Holder's full Name" class="form-control" onChange={this.changeName} required />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">CVC Number </label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.cvcNo} name="CVCNumber" placeholder="Enter CVC Number" class="form-control" onChange={this.changeCVCNumber} required />
                                            </div>
                                            CVC Number is required.*
                                        </div>
                                        <br></br>

                                        <div className="form-inline">
                                            <label className="col-sm-2 col-form-label">Amount </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"></span></div>
                                                <input type="text" value={"Rs." + this.state.amount} name="Amount" placeholder="Enter Amount" className="form-control" onChange={this.changeAmount} required />
                                            </div>
                                        </div>

                                        <br></br>
                                        <div className="form-inline">
                                            <button className="delibtn delibtn_Effect" onClick={this.savePayment}>Pay Now </button>
                                            <button className="delBtn delBtn_Effect" onClick={this.canceled} style={{ marginLeft: "10px" }}>   Cancel   </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                            <br></br>

                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>

            </div>
        );
    }



}

export default withRouter(AddCardPaymentComponent);