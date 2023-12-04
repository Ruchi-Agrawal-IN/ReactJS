import axios from "axios";

export default axios.create({
    url:'https://api.themoviedb.org/3/discover/',
    //baseURL: 'https://api.rawg.io/api',
    params:{
        api_key: 'c0bcb2e209ff3ac6eff41483869df280'
    //key:'e4f02fe4004044be9f1fa42f09222928'
   } 
})