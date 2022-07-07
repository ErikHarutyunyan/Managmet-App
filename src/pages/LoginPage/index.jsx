import { LoginBg, LoginPageWrapper } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectUser } from "../../app/features/currentUser/currentUserSlice";
import SuccessLogin from "../../components/SuccessLogin";
import GoToMainPage from "../../components/GoToMainPage";

const LoginPage = () => {
  // const [showSuccess, setShowSuccess] = useState(true);

  // const user = useSelector(selectUser);
  // console.log(user)
  // const navigate = useNavigate();

  // useEffect(() => {
  //   debugger;
  //   if (user?.user?.IsActive) {
  //     setShowSuccess(!showSuccess);
  //   }
  //   // eslint-disable-next-line
  // }, [user]);

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
        {/* {showSuccess ? <LoginForm /> : <GoToMainPage />} */}
        <LoginForm />
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
