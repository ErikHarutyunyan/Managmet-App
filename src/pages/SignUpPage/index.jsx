import { SignUpBg, SignUpPageWrapper } from "./SignUpPage.styled";
import SignUpForm from "../../components/SignUpForm";
import { getCookie } from "../../utils";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
  const auth = getCookie();
  if (auth.loginUser) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <>
      <SignUpPageWrapper>
        <SignUpBg className="signUp_bg">
          <div className="signUp_title">
            <h1>Welcome to</h1>
            <div className="signUp_text">
              <p>Admin System</p>
              <p>Make Your Work Easiler</p>
            </div>
          </div>
        </SignUpBg>
        <SignUpForm />
      </SignUpPageWrapper>
    </>
  );
};

export default SignUpPage;
