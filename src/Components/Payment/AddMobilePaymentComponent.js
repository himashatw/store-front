import React, { Component } from 'react';
import PayementService from '../../services/payementService';
import { withRouter } from 'react-router-dom';
import payementService from '../../services/payementService';


class AddMobilePaymentComponent extends Component {


    constructor(props) {

        const myTotal = props.match.params.subTotal;
        console.log("Mobile : " + myTotal);


        super(props);

        this.state = {

            phoneNo: '',
            pinNo: '',
            amount: props.match.params.subTotal

        }

    }

    _
    addPhoneNumber = (event) => {
        this.setState({ phoneNo: event.target.value });
    }
    addPinNumber = (event) => {
        this.setState({ pinNo: event.target.value });
    }
    addAmount = (event) => {
        this.setState({ amount: event.target.value });
    }



    savePhonePayment = (event) => {
        event.preventDefault();

        let payement = { phoneNo: this.state.phoneNo, pinNo: this.state.pinNo, amount: this.state.amount };
        console.log("Mobile Payement=>" + JSON.stringify(payement));


        PayementService.addMobilePaymentDetails(payement)
            .then(response => {
                // this.props.history.push("/add-mobilePayment")
                alert("Your payment has been saved successfully ✅ Please wait for the confirmation message ❗")

                PayementService.sendConfirmationMsg(this.state.amount, this.state.pinNo)
                    .then(response => {
                        alert("Confirmation Message sent successfully ✅")
                    })
                    .catch(err => {
                        alert(err)
                    })

            }).catch(err =>
                alert("🔴 Please check again your payement details ❗")

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
    }


    render() {
        return (
            <div className="bg-img">

                <br></br>
                <center>
                    <button className="cardBtn cardBtn_Effect" onClick={this.goToCardPayment}> Payment Via Credit Card </button>
                    <button className="mobBtn mobBtn_Effect" onClick={this.goToMobilePayment} style={{ marginLeft: "10px" }}> Payment Via Mobile Phone   </button>
                </center>
                <center><h2 className="font1">Mobile <div className="font2">PAYMENTS</div></h2></center>
                <br></br>
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <br></br>
                    <div className="card-title">
                        <center><h3><i> Add Mobile-Pay Details Here</i> 📱</h3> </center>
                    </div>
                    <div className="card-body">
                        <div className="form-group row">
                            <div className="container">
                            The appointment of the payment will be confirmed via SMS and email.*
                                <form>
                                    <div className="container">
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Phone Number </label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.phoneNo} name="phoneNo" placeholder="Enter Phone Number" class="form-control" onChange={this.addPhoneNumber} required />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Pin Number </label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.pinNo} name="pinNo" placeholder="Enter Pin Number" class="form-control" onChange={this.addPinNumber} required />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className="form-inline">
                                            <label className="col-sm-2 col-form-label">Amount </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"></span></div>
                                                <input type="text" value={"Rs." + this.state.amount} name="amount" placeholder="Enter Amount" className="form-control" onChange={this.addAmount} required />
                                            </div>
                                        </div>

                                        <br></br>
                                        <div className="form-inline">
                                            <button className="delibtn delibtn_Effect" onClick={this.savePhonePayment}>Pay Now </button>
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

export default withRouter(AddMobilePaymentComponent);