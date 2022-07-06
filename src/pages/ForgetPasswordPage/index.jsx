import { ForgetPasswordBg, ForgetPasswordPageWrapper } from "./ForgetPasswordPage.styled";
import ForgetPasswordForm from "../../components/ForgetPasswordForm";

const ForgetPasswordPage = () => {
  return (
    <>
      <ForgetPasswordPageWrapper>
        <ForgetPasswordBg className="forgetPassword_bg">
          <div className="forgetPassword_title">
            <h1>Welcome to</h1>
            <div className="forgetPassword_text">
              <p>Admin System</p>
              <p>Make Your Work Easiler</p>
            </div>
          </div>
        </ForgetPasswordBg>
        <ForgetPasswordForm />
      </ForgetPasswordPageWrapper>
    </>
  );
};

export default ForgetPasswordPage;
