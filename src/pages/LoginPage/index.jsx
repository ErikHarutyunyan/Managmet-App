import { LoginBg, LoginPageWrapper } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
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
        <LoginForm/>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
