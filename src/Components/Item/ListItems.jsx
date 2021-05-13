import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ItemService from '../../services/ItemService';
import './Table.css'

class ListItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    deleteItem(id) {
        ItemService.deleteItem(id).then(res => {
            this.setState({
                items: this.state.items.filter(item => item.itemId !== id)
            });
        }).then(err =>{
            console.log(err);
        });
    }
    // searchItem(name){
    //     ItemService.searchItem(name).then(res =>{
    //         this.setState({
    //             items:this.state.items.filter(item => item.iteamName !== name)
    //         })
    //     })
    // }

    updateItem(id) {

        this.props.history.push(`/updateItem/${id}`);

    }

    componentDidMount() {
        ItemService.getItems().then((response) => {
            this.setState({ items: response.data })
        }).catch(err =>{
            console.log(err);
        })
    }

    addItem() {
        this.props.history.push('/additem');
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Item Details</h1>
                </div>
                <div>
                    <button onClick={this.addItem} className="addbtn addbtn_Effect">Add Item</button>
                    {/* <input type ="text" name="itemName" placeholder="Search ..."  style={{marginLeft: "900px"}}/>
                <button style={{marginLeft: "8px"}}>Search</button>  */}
                </div>
                <br></br>
                <div>
                    <table className="items">
                        <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th>Item Image</th>
                                <th>Item Category</th>
                                <th>Item Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    items =>
                                        <tr key={items.itemId}>
                                            <td>{items.itemId}</td>
                                            <td>{items.itemName}</td>
                                            <td><img src={items.url} alt="invalid" className="itemImage" /></td>
                                            <td>{items.itemCatagory}</td>
                                            <td>Rs.{items.itemPrice}</td>
                                            <td>
                                                <button className="editBtn editBtn_Effect" onClick={() => this.updateItem(items.itemId)}>Edit</button>
                                                <button className="delBtn delBtn_Effect" onClick={() => this.deleteItem(items.itemId)}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}

export default withRouter(ListItems);