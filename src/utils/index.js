import Cookies from "js-cookie"

export const getCookie = () => {
    let token = Cookies.get('JwtToken')
    let refresh = Cookies.get('RefreshToken')
    if(token && refresh) {
      return {loginUser:true,msg:''}
    }
    else {
      return {loginUser:false,msg:''}
    }
}