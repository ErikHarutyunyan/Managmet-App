import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import { BASE_URL } from "../config";

debugger
let authTokens =  Cookies.get("JwtToken") ? Cookies.get("JwtToken") : null

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers:{Authorization: `Bearer ${authTokens}`}
});


// axiosInstance.interceptors.request.use(
//  async (config) => {
//     const authToken =
//   debugger
//     if (authToken) {
//       config.headers.authorization = `Bearer ${authToken}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;



// const baseURL = 'http://127.0.0.1:8000'


// let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

// const axiosInstance = axios.create({
//     baseURL,
//     headers:{Authorization: `Bearer ${authTokens?.access}`}
// });

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = Cookies.get("JwtToken") ?  Cookies.get("JwtToken") : null
        req.headers.Authorization = `Bearer ${authTokens}`
  }
  let user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
    var date1 = new Date(user?.JwtTokenExpiresUtc);
    var date2 = new Date();
    let isExpired = false
    //best to use .getTime() to compare dates
    if(date1.getTime() < date2.getTime()){
      isExpired = true
    }
    // const user = jwt_decode(authTokens)
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    const refreshToken = user?.RefreshToken;
    if(!isExpired) return req

    const response = await axios.head(`${BASE_URL}UserAccount/RefreshToken`, {
      refresh: refreshToken,
    });

    Cookies.set('JwtToken', response.data)
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})


export default axiosInstance;