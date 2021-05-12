import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from '../../services/ItemService';
import './Form.css'
import Header from '../Header/Header';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemId: '',
            itemName: '',
            url: '',
            itemCatagory: '',
            itemPrice: ''
        }
        this.changeItemIdHandler = this.changeItemIdHandler.bind(this);
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.changeItemCategoryHandler = this.changeItemCategoryHandler.bind(this);
        this.changeItemPriceHandler = this.changeItemPriceHandler.bind(this);
        this.addItems = this.addItems.bind(this);
    }

    addItems = (e) => {
       e.preventDefault();
        const item = {
            itemId: this.state.itemId,
            itemName: this.state.itemName,
            url: this.state.url,
            itemCatagory: this.state.itemCatagory,
            itemPrice: this.state.itemPrice
        };
        console.log('Items => ' + JSON.stringify(item));
        ItemService.addItem(item).then(res => {
           this.props.history.push("/items");
        }).catch(err =>{
            console.log(err);
        })
    }

    changeItemIdHandler = (event) => {
        this.setState({ itemId: event.target.value });
    }


    changeItemNameHandler = (event) => {
        this.setState({ itemName: event.target.value });
    }

    changeUrlHandler = (event) => {
        this.setState({ url: event.target.value });
    }

    changeItemCategoryHandler = (event) => {
        this.setState({ itemCatagory: event.target.value });
    }

    changeItemPriceHandler = (event) => {
        this.setState({ itemPrice: event.target.value });
    }

    render() {
        return (
            <div>
                <Header/>
                <br></br>
                <div className="container">
                    <h3>Add Item</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label> Item Id: </label><br/>
                                <input placeholder="Item Id" name="itemId" className="form-control"
                                    value={this.state.itemId} onChange={this.changeItemIdHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Name: </label><br/>
                                <input placeholder="Item Name" name="itemName" className="form-control"
                                    value={this.state.itemName} onChange={this.changeItemNameHandler} required/>
                            </div>
                            <div className="form-group">
                                <label> Item Image: </label><br/>
                                <input placeholder="Image Url" name="url" className="form-control"
                                    value={this.state.url} onChange={this.changeUrlHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Category: </label><br/>
                                <input placeholder="Item Category" name="itemCatagory" className="form-control"
                                    value={this.state.itemCatagory} onChange={this.changeItemCategoryHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Price: </label><br/>
                                <input placeholder="Item Price" name="itemPrice" className="form-control"
                                    value={this.state.itemPrice} onChange={this.changeItemPriceHandler} />
                            </div>
                            <br></br>
                            <button className="saveBtn saveBtn_Effect" onClick={this.addItems}>Save</button>
                            <Link to="/items">
                                <button className="delBtn delBtn_Effect" style={{ marginLeft: "10px" }}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default AddItem;