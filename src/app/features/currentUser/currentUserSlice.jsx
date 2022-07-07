import { loginCurrentUser, regCurrentUser } from "./currentUserApi";
import Cookies from "js-cookie";

export function currentUserReducer(state = {}, action) {
  if (action.type === "login") {
    return {
      data: action.payload.data,
    };
  }
  if (action.type === "logout") {
    return {
      data: null,
    };
  }
  if (action.type === "login-error") {
    return {
      data: action.payload.user,
    };
  }
  return state;
}

// export function selectUser(state) {
//   return state.user;
// }

// export function selectUserActive(state) {
//   return false;
// }

export function userLogout() {
  Cookies.remove("JwtToken");
  Cookies.remove("RefreshToken");
  return {
    type: "logout",
  };
}

export function userLoginError() {
  return {
    type: "login-error",
    payload: {
      user: {
        loginUser: false,
        msg: "Your email address or password is not correct",
      },
    },
  };
}

export function userLogin(data) {
  console.log("userLogin222", data);
  return {
    type: "login",
    payload: {
      data,
    },
  };
}

export function loginUser(data) {
  return (dispatch, getState) => {
    debugger;
    return loginCurrentUser(data)
      .then((responseUser) => {
        console.log("QWE", responseUser);
        if (responseUser.data.Item.JwtToken) {
          debugger;
          Cookies.set("JwtToken", responseUser.data.Item.JwtToken);
          Cookies.set("RefreshToken", responseUser.data.Item.RefreshToken);
          dispatch(userLogin(responseUser.data.Item));
        } else {
          Cookies.remove("auth-token");
        }
      })
      .catch(() => dispatch(userLoginError()));
  };
}

export function registerUser(data) {
  return (dispatch, getState) => {
    return regCurrentUser(data)
      .then((responseUser) => {
        console.log(responseUser);
      })
      .catch(() => dispatch(userLoginError()));
  };
}

export const initialCurrentUser = {
  data: null,
};
