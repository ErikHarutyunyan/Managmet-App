import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { BiLike } from "react-icons/bi";
// Import Styled
import {
  SuccessPassRestWrapper,
  SuccessPassRestInfo,
  SuccessPassRestUser,
} from "./SuccessPassRest.styled";

const SuccessPassRest = () => {
  const navigate = useNavigate();

  const handlerHome = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <SuccessPassRestWrapper>
        <div className="successPassRest_container">
          <div className="successPassRest">
            <BiLike color="#10B981"/>
          </div>
          <SuccessPassRestInfo>
            <h1>Password Reset Successfully</h1>
            <h3>Your password has been reset!</h3>
          </SuccessPassRestInfo>
          <SuccessPassRestUser>
            <div className="button_successPassRest_wrapper">
              <button
                type="submit"
                value="submit"
                id="button_successPassRest"
                onClick={handlerHome}
              >
                Go to Main Page
              </button>
            </div>
          </SuccessPassRestUser>
        </div>
      </SuccessPassRestWrapper>
    </>
  );
};

export default SuccessPassRest;
