import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-berita-indonesia.vercel.app',
})

export default api