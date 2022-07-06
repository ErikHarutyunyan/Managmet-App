import axiosApiInstance from "../../../api/Interceptor";
export async function  loginCurrentUser  (data) {
    return await axiosApiInstance.post(`auth/login`, data);
}