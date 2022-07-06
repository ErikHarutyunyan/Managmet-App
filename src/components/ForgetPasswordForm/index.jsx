import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

// For form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

// Import Styled
import {
  ForgetPasswordFormWrapper,
  ForgetPasswordFormInfo,
  ForgetPasswordFormUser,
  ErrorMessage,
} from "./ForgetPasswordForm.styled";

const ForgetPasswordForm = () => {
  const [errorMsg, setErrorMsg] = useState(null);
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
    // console.log(data);

    try {
      console.log(data);
    } catch (e) {
      if (e.response.status === 422) {
        setErrorMsg("Your email address or password is not correct");
      }
    } finally {
    }
  };
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <ForgetPasswordFormWrapper>
        <div className="forgetPasswordForm_container">
          <ForgetPasswordFormInfo>
            <h1>Forget Password</h1>
            <h3>Please enter your email</h3>
          </ForgetPasswordFormInfo>
          <ForgetPasswordFormUser>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email_wrapper">
                <label htmlFor="email_forgetPasswordForm">Email</label>
                <input
                  type="email"
                  name="email_forgetPasswordForm"
                  id="email_forgetPasswordForm"
                  {...register("email")}
                  placeholder="Enter your email"
                />
                {errors.email?.message && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>
              <div className="button_forgetPasswordForm_wrapper">
                <button
                  type="submit"
                  value="submit"
                  id="button_forgetPasswordForm"
                >
                  Send to Email
                </button>
              </div>
            </form>
          </ForgetPasswordFormUser>
        </div>
      </ForgetPasswordFormWrapper>
    </>
  );
};

export default ForgetPasswordForm;
