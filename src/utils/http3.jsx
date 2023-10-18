// membuat pondasi axios 
// mengatur Scurity Level 2
import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";



// level 5


const http3 = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: 'application/json',
    "Content-Type": "application/json",
 }
});


// teknik begal 
http3.interceptors.request.use(
  // inject header 
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
    };
    return config;
  },
);


export default http3;
