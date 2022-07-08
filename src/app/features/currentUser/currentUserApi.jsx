import axiosApiInstance from "../../../api/Interceptor";

export async function loginCurrentUser(data) {
  return await axiosApiInstance.post(`UserAccount/Authorize`, data);
}
export async function regCurrentUser(data) {
  return await axiosApiInstance.post(`UserAccount/Register`, data);
}
