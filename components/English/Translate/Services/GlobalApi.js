import axios from "axios";

const BASE_URL = 'https://openai-api-translate-d0ca68c39be5.herokuapp.com/app'
// const BASE_URL = 'http://192.168.1.21:3001/app'   //Replace with System PC IP address

const getBardApi=(msg)=>axios.get(BASE_URL+"?ques="+msg);

export default{
    getBardApi
}