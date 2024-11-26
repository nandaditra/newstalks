import axios from "axios";

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers : {
    'Authorization': 'Client-ID 082fa67973a5461cad981bea600133b5'
  }
})

export default api