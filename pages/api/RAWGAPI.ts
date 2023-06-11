import axios from "axios";

const RawgAPI = axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'0d43ba3e1cfd463096b644b89f81b0c8'
  }
});

export default RawgAPI;