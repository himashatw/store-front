import React, { Component } from 'react';
import ItemService from '../../services/ItemService';
import './Table.css'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/EditOutlined';

class ListItems extends Component{
    constructor(props){
        super(props)

        this.state = {
            items:[]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    deleteItem(id){
        ItemService.deleteItem(id).then(res=>{
            this.setState({
                items:this.state.items.filter(item => item.itemId !== id)
            });
        });
    }
    // searchItem(name){
    //     ItemService.searchItem(name).then(res =>{
    //         this.setState({
    //             items:this.state.items.filter(item => item.iteamName !== name)
    //         })
    //     })
    // }

    updateItem(id){

     this.props.history.push(`/updateItem/${id}`); 
  
    }

    componentDidMount(){
        ItemService.getItems().then((response)=>{
            this.setState({items:response.data})
        })
    }

    addItem(){
        this.props.history.push('/additem');
    }

    render(){
       return (
        <div>
            <div>
                <h2>Item Details</h2>
            </div>
            <div className="addItemDiv">
                <button onClick ={this.addItem} >Add Item</button>
                {/* <input type ="text" name="itemName" placeholder="Search ..."  style={{marginLeft: "900px"}}/>
                <button style={{marginLeft: "8px"}}>Search</button>  */}
            </div>
            <br></br>
            <div className="div_body">
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
                            <tr key = {items.itemId}>
                                <td>{items.itemId}</td>
                                <td>{items.itemName}</td>
                                <td><img src={items.url} alt="invalid" className="itemImage"/></td>
                                <td>{items.itemCatagory}</td>
                                <td>Rs.{items.itemPrice}</td>
                                <td>
                                    <EditIcon color="primary" onClick={ () => this.updateItem(items.itemId)}/>
                                    <DeleteIcon color="error" onClick={ () => this.deleteItem(items.itemId)}/>
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

export default ListItems;