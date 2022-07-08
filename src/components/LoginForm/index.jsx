import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// For form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

// Import Styled
import {
  LoginFormWrapper,
  LoginFormInfo,
  LoginFormUser,
  LoginFormFooter,
  ErrorMessage,
} from "./LoginForm.styled";
import {
  loginUser,
  selectUser,
} from "../../app/features/currentUser/currentUserSlice";

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    try {
      dispatch(loginUser(data));
    } catch (e) {
      if (e.response.status === 422) {
        setErrorMsg("Your email address or password is not correct");
      }
    } finally {
    }
  };

  // const handlerHome = () => {
  //   navigate("/dashboard");
  // };
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <LoginFormWrapper>
        <div className="loginForm_container">
          <LoginFormInfo>
            <h1>Login</h1>
            <h3>Please enter login information</h3>
          </LoginFormInfo>
          <LoginFormUser>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email_wrapper">
                <label htmlFor="email_log">Email</label>
                <input
                  type="email"
                  name="email_log"
                  id="email_log"
                  {...register("email")}
                  placeholder="Enter your email"
                />
                {errors.email?.message && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>
              <div className="pass_wrapper">
                <label htmlFor="pass_log">Password</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="pass_log"
                  id="pass_log"
                  {...register("password")}
                  placeholder="Enter your password"
                />
                {errors.password?.message && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <button className="showPass" onClick={togglePassword}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="save_info_forget_pass">
                <div className="save_info_wrapper">
                  <label htmlFor="save_info" className="save_info_container">
                    Save Info
                    <input type="checkbox" id="save_info" name="save info" />
                    <span className="save_info_checkmark"></span>
                  </label>
                </div>
                <div className="forget_pass_wrapper">
                  <Link to="/forgetPassword">Forget Password?</Link>
                </div>
              </div>
              <div className="button_log_wrapper">
                <button type="submit" value="submit" id="button_log">
                  Login
                </button>
              </div>
            </form>
            <LoginFormFooter>
              <p>No Accounts?</p>
              <Link to="/signup">Sign-up</Link>
            </LoginFormFooter>
          </LoginFormUser>
        </div>
      </LoginFormWrapper>
    </>
  );
};

export default LoginForm;
