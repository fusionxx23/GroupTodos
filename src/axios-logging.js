import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://grouptodo-ec212.firebaseio.com/'
}); 
export default instance; 