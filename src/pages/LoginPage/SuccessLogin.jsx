import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { BiLike } from "react-icons/bi";
// Import Styled
import {
  SuccessLoginWrapper,
  SuccessLoginInfo,
  SuccessLoginUser,
} from "./SuccessLogin.styled";

const SuccessLogin = () => {
  const navigate = useNavigate();

  const handlerHome = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <SuccessLoginWrapper>
        <div className="successLogin_container">
          <div className="successLogin">
            <BiLike color="#10B981"/>
          </div>
          <SuccessLoginInfo>
            <h1>Successfully Login</h1>
            <h3>You have logged in!</h3>
          </SuccessLoginInfo>
          <SuccessLoginUser>
            <div className="button_sucessLogin_wrapper">
              <button
                type="submit"
                value="submit"
                id="button_sucessLogin"
                onClick={handlerHome}
              >
                Go to Main Page
              </button>
            </div>
          </SuccessLoginUser>
        </div>
      </SuccessLoginWrapper>
    </>
  );
};

export default SuccessLogin;
