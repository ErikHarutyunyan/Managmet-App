import { SignUpBg, SignUpPageWrapper } from "./SignUpPage.styled";
import SignUpForm from "../../components/SignUpForm";

const SignUpPage = () => {
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
        <SignUpForm/>
      </SignUpPageWrapper>
    </>
  );
};

export default SignUpPage;
