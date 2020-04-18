import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-e860f.firebaseio.com/",
});

export default instance;
