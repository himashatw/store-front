import axios from'./axios';

class ItemService{

    getItems(){

        return axios.get('/item/all');
    }

    deleteItem(itemId){
         return axios.delete('/item/delete/'+itemId);
    }

    addItem(item){
         return axios.post('/item/add/',item);
    }

    getItemById(itemId){
         return axios.get('/item/'+itemId);
    }

    updateItem(itemUpdateResource,itemId){
          return axios.put('/item/'+itemId,itemUpdateResource);
    }

    searchItem(itemName){
         return axios.get('/item/search/'+itemName);
    }

}

export default new ItemService();