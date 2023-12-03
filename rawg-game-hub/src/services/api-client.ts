import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
    key:'e4f02fe4004044be9f1fa42f09222928'
   } 
})