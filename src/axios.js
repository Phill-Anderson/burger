import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/"
});

//axios - оор server тал руу хүсэлт хийх болгонд хэрэв cookie байвал req -* ээр дамжуул гэсэн тохиргоо
instance.defaults.withCredentials = true; // cookie - д бга бүх зүйлийг rest service рүү дамжуулах тохиргоо


export default instance;
