import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// For form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

// Import Styled
import {
  SignUpFormWrapper,
  SignUpFormInfo,
  SignUpFormUser,
  // SignUpFormFooter,
  ErrorMessage,
} from "./SignUpForm.styled";
import { registerUser } from "../../app/features/currentUser/currentUserSlice";
import { useEffect } from "react";
import { clearMessage } from "../../app/features/currentUser/message";

const SignUpForm = () => {
  // Error message state
  const [errorMsg, setErrorMsg] = useState(null);

  // Dispatch
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const message = useSelector((state)=>state.message)
 const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // onSubmit
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    await dispatch(registerUser(data));
  };
  useEffect( () => {
    if (message.error) {
      setErrorMsg(message.message);
    } else if (message.message === "Register success") {
      dispatch(clearMessage())
      navigate("/login");
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[message])
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <SignUpFormWrapper>
        <div className="signUpForm_container">
          <SignUpFormInfo>
            <h1>Sign Up</h1>
            <h3>Register as a Member</h3>
          </SignUpFormInfo>
          <SignUpFormUser>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email_wrapper">
                {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
                <label htmlFor="email_signUp">Email</label>
                <input
                  type="email"
                  name="email_signUp"
                  id="email_signUp"
                  {...register("email")}
                  placeholder="Enter your email"
                />
                {errors.email?.message && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>
              <div className="pass_wrapper">
                <label htmlFor="pass_signUp">Password</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="pass_signUp"
                  id="pass_signUp"
                  {...register("password")}
                  placeholder="Enter your password"
                />
                {errors.password?.message && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <button type="button" className="showPass" onClick={togglePassword}>
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
              </div>
              <div className="button_signUp_wrapper">
                <button type="submit" value="submit" id="button_signUp">
                  Sign Up
                </button>
              </div>
            </form>
          </SignUpFormUser>
        </div>
      </SignUpFormWrapper>
    </>
  );
};

export default SignUpForm;
