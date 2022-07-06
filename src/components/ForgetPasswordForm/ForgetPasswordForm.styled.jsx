import styled from "styled-components";
import { device } from "../../themes/breakpoints";

export const ForgetPasswordFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10%;
  @media ${device.laptop} {
    justify-content: center;
    padding: 0 20px;
    position: absolute;
    bottom: 40px;
  }
  .forgetPasswordForm_container {
    width: 100%;
    padding: 20px 40px 56px 40px;
    max-width: 600px;

    @media ${device.laptop} {
      background: var(--color-gray-50);
      opacity: 0.95;
      backdrop-filter: blur(4px);
      padding: 20px 30px 20px 30px;
      border-radius: 8px;
    }
    @media ${device.tablet} {
      max-width: 442px;
      padding: 20px 30px 28px 30px;
    }
    @media ${device.mobileM} {
      max-width: 320px;
    }
  }
`;

export const ForgetPasswordFormInfo = styled.div`
  padding: 16px;
  background-color: var(--color-gray-100);
  border-radius: 16px;

  & h1 {
    font-weight: 600;
    font-style: normal;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -0.04em;
    color: var(--color-gray-600);
    @media ${device.tablet} {
      font-size: 24px;
    }
    @media ${device.mobileM} {
      font-size: 20px;
    }
  }
  & h3 {
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--color-gray-400);
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
  }
`;

export const ForgetPasswordFormUser = styled.div`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 28px;

  & .email_wrapper label,
  .pass_wrapper label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: var(--color-gray-600);
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 14px;
    }
  }

  & .pass_wrapper {
    position: relative;
    margin-top: 32px;
    & .showPass {
      position: absolute;
      top: 35px;
      right: 10px;
      cursor: pointer;
      background: var(--color-white);
    }
  }

  & .save_info_container {
    display: flex;
    position: relative;
    padding-left: 28.5px;
    cursor: pointer;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--color-gray-400);
    user-select: none;
    align-items: center;
    & input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    & .save_info_checkmark {
      position: absolute;
      top: 5px;
      left: 0;
      height: 21px;
      width: 21px;
      border: 1.25px solid var(--color-gray-400);
      background-color: var(--color-gray-50);
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
  }

  /* On mouse-over, add a grey background color */
  .save_info_container:hover #save_info ~ .save_info_checkmark {
    background-color: var(--color-gray-300);
  }

  /* When the checkbox is checked, add a blue background */
  .save_info_container #save_info:checked ~ .save_info_checkmark {
    background-color: var(--color-blue-500);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .save_info_checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .save_info_container #save_info:checked ~ .save_info_checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .save_info_container .save_info_checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  & #email_forgetPasswordForm,
  #pass_forgetPasswordForm {
    width: 100%;
    display: block;
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    border-radius: 4px;
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  & #email_forgetPasswordForm::placeholder,
  #pass_forgetPasswordForm::placeholder {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: var(--color-gray-400);
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 14px;
    }
  }

  & .save_info_forget_pass {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }

  & .forget_pass_wrapper {
    position: relative;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    & a {
      color: var(--color-blue-500);
    }
    & a:active {
      color: var(--color-blue-500) !important;
    }
    & .showPass {
      position: absolute;
      top: 0;
      right: 0;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
  }

  & .button_forgetPasswordForm_wrapper {
    button {
      width: 100%;
      background: var(--color-green-500);
      border-radius: 8px;
      text-align: center;
      padding-top: 12px;
      padding-bottom: 12px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: var(--color-white);
      margin-top: 40px;
      @media ${device.tablet} {
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      @media ${device.mobileM} {
        font-size: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }
  }
`;

// export const ForgetPasswordFormFooter = styled.div`
//   display: flex;
//   margin-top: 28px;
//   justify-content: center;
//   & p {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 24px;
//     letter-spacing: -0.02em;
//     color: var(--color-gray-500);
//     @media ${device.tablet} {
//       font-size: 20px;
//     }
//     @media ${device.mobileM} {
//       font-size: 16px;
//     }
//   }
//   & a:last-child {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 24px;
//     letter-spacing: -0.02em;
//     color: var(--color-green-500);
//     margin-left: 24px;
//     @media ${device.tablet} {
//       font-size: 20px;
//     }
//     @media ${device.mobileM} {
//       font-size: 16px;
//     }
//   }
// `;

export const ErrorMessage = styled.p`
  padding: 8px 2px;
  color: var(--color-error);
`;
