import { loginCurrentUser, regCurrentUser } from "./currentUserApi";

import Cookies from "js-cookie";
import { setMessage, clearMessage } from "./message";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export function currentUserReducer(state = initialState, action) {
  if (action.type === "register_success") {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  if (action.type === "register_fail") {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  if (action.type === "login_success") {
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload.data,
    };
  }
  if (action.type === "logout") {
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  }
  if (action.type === "login_fail") {
    console.log("login_fail");
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  }
  if (action.type === "refresh_token") {
    return {
      ...state,
      user: { ...user, accessToken: action.payload },
    };
  }
  return state;
}

export function userRegError(data) {
  return {
    type: "register_fail",
  };
}

export function userReg(data) {
  return {
    type: " register_success",
  };
}

export function userLoginError(data) {
  return {
    type: "login_fail",
  };
}

export function userLogin(data) {
  return {
    type: "login_success",
    payload: {
      data,
    },
  };
}

export function userLogout() {
  Cookies.remove("JwtToken");
  Cookies.remove("RefreshToken");
  localStorage.removeItem("user");
  return {
    type: "logout",
  };
}

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: "refresh_token",
    payload: accessToken,
  });
};

export function loginUser(data) {
  return (dispatch, getState) => {
    return loginCurrentUser(data)
      .then((responseUser) => {
        if (responseUser.data.Item.JwtToken) {
          localStorage.setItem("user", JSON.stringify(responseUser.data.Item));
          Cookies.set("JwtToken", responseUser.data.Item.JwtToken);
          Cookies.set("RefreshToken", responseUser.data.Item.RefreshToken);
          dispatch(userLogin(responseUser.data.Item));
          dispatch(
            setMessage({
              message: "Login success",
              error: false,
            })
          );
        } else {
          Cookies.remove("auth-token");
        }
      })
      .catch((error) => {
        dispatch(userLoginError());
        dispatch(
          setMessage({
            message: "Your email address or password is not correct",
            error: true,
          })
        );
      });
  };
}

export function registerUser(data) {
  return (dispatch, getState) => {
    return regCurrentUser(data)
      .then((responseUser) => {
        dispatch(userReg());
        dispatch(setMessage({ message: "Register success", error: false }));
      })
      .catch((error) => {
        const message = error.response.data.errorMessage;
        dispatch(userRegError());
        dispatch(setMessage({ message, error: true }));
      });
  };
}
