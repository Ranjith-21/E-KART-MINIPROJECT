import axios from 'axios';

let HTTP = axios.create({
  baseURL: "https://ty-shop.herokuapp.com",
});
export default HTTP