import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.worldnewsapi.com',
  headers : {
    'Authorization': 'Client-ID 83ed7be80d974aad81ff6638e635dcec'
  }
})

export default api