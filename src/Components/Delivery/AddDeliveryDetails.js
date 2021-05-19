import React from 'react';
import { withRouter } from 'react-router-dom';
import DeliveryService from '../../services/deliveryService';

class AddDeliveryDetails extends React.Component {
    constructor(props) {
        super(props);

        const myTotal = props.match.params.subTotal;
        console.log("Delivery : " + myTotal);

        this.state = {
            customerName: '',
            homeNo: '',
            addressLine: '',
            city: '',
            provice: '',
            postalCode: ''

        }

    }

    AddCustomerName = (event) => {
        this.setState({ customerName: event.target.value });
    }

    addHomeNo = (event) => {
        this.setState({ homeNo: event.target.value });
    }

    addAddressLine = (event) => {
        this.setState({ addressLine: event.target.value });
    }

    addCity = (event) => {
        this.setState({ city: event.target.value });
    }

    addProvince = (event) => {
        this.setState({ provice: event.target.value });
    }

    addPostalCode = (event) => {
        this.setState({ postalCode: event.target.value });
    }

    addDelivery = (e) => {
        e.preventDefault();

        let delDetails = {
            customerName: this.state.customerName,
            homeNo: this.state.homeNo,
            addressLine: this.state.addressLine,
            city: this.state.city,
            provice: this.state.provice,
            postalCode: this.state.postalCode
        };
        console.log("Delivery Details=>" + JSON.stringify(delDetails));


        DeliveryService.addDelivery(delDetails)
            .then(response => {
                var x = this.props.match.params.subTotal;
                alert("Your delivery has been saved successfully... Do you want to Continue ? ✅")
                this.props.history.push(`/addCardPayment/${x}`)

            }).catch(err =>
                alert("🔴 Please check again your delivery details ❗")

            );
    }

    canceled = () => {
        var x = this.state.amount;
        this.props.history.push(`/checkout`);
    }

    render() {
        return (
            <div>

                <br></br>
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <br></br>
                    <div className="card-title">
                        <center><h3><i> Add Delivery Details Here</i> 🚚</h3> </center>
                    </div>
                    <div className="card-body">
                        <div className="form-group row">

                            <div className="container">

                                <form>
                                    <div className="container">
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.customerName} name="customerName" placeholder="Enter your Phone Name" class="form-control" onChange={this.AddCustomerName} required />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Home No</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.homeNo} name="homeNo" placeholder="Enter your Home No" class="form-control" onChange={this.addHomeNo} required />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Address Line</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.addressLine} name="addressLine" placeholder="Enter your Address Line" class="form-control" onChange={this.addAddressLine} required />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">City</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.city} name="city" placeholder="Enter your City" class="form-control" onChange={this.addCity} required />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Province</label>
                                            <div className="col-sm-10">
                                                <input type="text" value={this.state.provice} name="provice" placeholder="Enter your Province Number" class="form-control" onChange={this.addProvince} required />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-inline">
                                            <label className="col-sm-2 col-form-label">Postal Code </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"></span></div>
                                                <input type="text" value={this.state.postalCode} name="postalCode" placeholder="Enter your Postal Code" className="form-control" onChange={this.addPostalCode} required />
                                            </div>
                                        </div>

                                        <br></br>
                                        <div className="form-inline">
                                            <button className="delibtn delibtn_Effect" onClick={this.addDelivery}>Submit </button>
                                            <button className="delBtn delBtn_Effect" onClick={this.canceled}>Cancel</button>
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
        )
    }
}

export default withRouter(AddDeliveryDetails);