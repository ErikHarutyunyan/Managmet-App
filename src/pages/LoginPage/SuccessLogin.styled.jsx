import styled from "styled-components";
import { device } from "../../themes/breakpoints";

export const SuccessLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10%;
  @media ${device.laptop} {
    justify-content: center;
    padding: 0 20px;
    position: absolute;
    bottom: 140px;
  }
  & .successLogin {
    width: 48px;
    height: 48px;
    background: var(--color-green-100);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    & svg {
      width: 26.67px;
      height: 26.67px;
    }
  }
  .successLogin_container {
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

export const SuccessLoginInfo = styled.div`
  padding: 16px;
  border-radius: 16px;
  padding-top: 0px;
  margin-top: 32px;
  text-align: center;
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

export const SuccessLoginUser = styled.div`
  width: 100%;
  padding-bottom: 28px;
  & .button_successLogin_wrapper{
    button {
      width: 100%;
      cursor: pointer;
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
      margin-top: 40px;
      color: var(--color-white);
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

// export const ErrorMessage = styled.p`
//   padding: 8px 2px;
//   color: var(--color-error);
// `;
