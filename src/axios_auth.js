import axios from 'axios'

//for base endpoint instance
const instance = axios.create({
  baseURL: " endpoint"
})

export default instance
