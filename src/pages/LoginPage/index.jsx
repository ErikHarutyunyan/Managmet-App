import { LoginBg, LoginPageWrapper } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate , Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { GoToMainPageInfo, GoToMainPageWrapper } from "./GoToMainPage.styled";
import { Spinner } from "../../components/Loader/Spinner";
import ProgressBar from "../../components/Loader/Progress.jsx";
import {
  SuccessLoginInfo,
  SuccessLoginUser,
  SuccessLoginWrapper,
} from "./SuccessLogin.styled";

const LoginPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [goto, setGoto] = useState(true);
  const [successLog, setSuccessLog] = useState(false);
  
  const dataState = useSelector((state) => state);
  console.log(dataState.user.isLoggedIn);

  useEffect(() => {
    if ((dataState?.user?.isLoggedIn)) {
      console.log("first");
      setShowSuccess(!showSuccess);
    }
    // eslint-disable-next-line
  }, [dataState]);

  const [value, setValue] = useState(0);




  useEffect(() => {
    if (showSuccess) {
      const interval = setInterval(() => {
        setValue((oldValue) => {
          const newValue = oldValue + 1;
          if (newValue === 100) {
            clearInterval(interval);
            setShowSuccess(!showSuccess);
            setGoto(!goto);
            setSuccessLog(!successLog);
          }

          return newValue;
        });
      }, 10);
    }
  }, [showSuccess]);

  const navigate = useNavigate();

  const handlerHome = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <LoginPageWrapper>
        <LoginBg className="login_bg">
          <div className="login_title">
            <h1>Welcome to</h1>
            <div className="login_text">
              <p>Admin System</p>
              <p>Make Your Work Easiler</p>
            </div>
          </div>
        </LoginBg>
        {showSuccess ? (
          <GoToMainPageWrapper>
            <div className="goToMainPage_container">
              <div className="goToMainPage">
                <Spinner />
              </div>
              <GoToMainPageInfo>
                <h1>Going to the Main Page</h1>
                <h3>Thanks for your patience!</h3>
              </GoToMainPageInfo>
              <ProgressBar
                color={"#10B981"}
                width={"100%"}
                value={value}
                max={100}
              />
            </div>
          </GoToMainPageWrapper>
        ) : successLog ? (
          <SuccessLoginWrapper>
            <div className="successLogin_container">
              <div className="successLogin">
                <BiLike color="#10B981" />
              </div>
              <SuccessLoginInfo>
                <h1>Successfully Login</h1>
                <h3>You have logged in!</h3>
              </SuccessLoginInfo>
              <SuccessLoginUser>
                <div className="button_successLogin_wrapper">
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
        ) : (
          <LoginForm />
        )}
        {/* <LoginForm /> */}
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
