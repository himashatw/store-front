import axios from 'axios';

const DELIVERY_URL = 'http://localhost:8060/api'

class DeliveryService{

    addDelivery(delivery){
        return axios.post(DELIVERY_URL+'/delivery/addDelivery/',delivery);
   }

   retriveDelivery(){
       return axios.get(DELIVERY_URL+'/delivery/allDeliveries')
   }

}

export default new DeliveryService();