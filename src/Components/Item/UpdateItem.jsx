import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from '../../services/ItemService';
import './Form.css'
import Header from '../Header/Header';

class UpdateItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemId: this.props.match.params.id,
            itemName: '',
            url: '',
            itemCatagory: '',
            itemPrice: ''
        }
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.changeItemCatagoryHandler = this.changeItemCatagoryHandler.bind(this);
        this.changeItemPriceHandler = this.changeItemPriceHandler.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount() {
        ItemService.getItemById(this.state.itemId).then((res) => {
            let item = res.data;
            this.setState({
                itemName: item.itemName,
                itemCatagory: item.itemCatagory,
                url: item.url,
                itemPrice: item.itemPrice
            });
        });
    }

    updateItems = (e) => {
        e.preventDefault();
        const item = {
            itemName: this.state.itemName,
            itemCatagory: this.state.itemCatagory,
            url: this.state.url,
            itemPrice: this.state.itemPrice
        };
        console.log('Items => ' + JSON.stringify(item));
        console.log('ItemId => ' + JSON.stringify(this.state.itemId));
        ItemService.updateItem(item, this.state.itemId).then(res => {
            this.props.history.push("/items");
        }).catch(err =>{
            console.log(err);
        })
    }

    changeItemNameHandler = (event) => {
        this.setState({ itemName: event.target.value });
    }

    changeUrlHandler = (event) => {
        this.setState({ url: event.target.value });
    }

    changeItemCatagoryHandler = (event) => {
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
                    <h3 className="text-center">Update Item</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label> Item Name: </label><br/>
                                <input placeholder="Item Name" name="itemName" className="form-control"
                                    value={this.state.itemName} onChange={this.changeItemNameHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Image Url: </label><br/>
                                <input placeholder="Image Url" name="url" className="form-control"
                                    value={this.state.url} onChange={this.changeUrlHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Category: </label><br/>
                                <input placeholder="Item Category" name="itemCatagory" className="form-control"
                                    value={this.state.itemCatagory} onChange={this.changeItemCatagoryHandler} />
                            </div>
                            <div className="form-group">
                                <label> Item Price: </label><br/>
                                <input placeholder="Item Price" name="itemPrice" className="form-control"
                                    value={this.state.itemPrice} onChange={this.changeItemPriceHandler} />
                            </div>
                            <br></br>
                            <button className="saveBtn saveBtn_Effect" onClick={this.updateItems}>Save</button>
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

export default UpdateItem;