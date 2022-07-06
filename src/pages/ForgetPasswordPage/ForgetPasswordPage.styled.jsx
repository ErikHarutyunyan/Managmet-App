import styled from "styled-components";
import { loginBg } from "../../components/Images";
import { device } from "../../themes/breakpoints";

export const ForgetPasswordPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  background: var(--color-gray-50);
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const ForgetPasswordBg = styled.div`
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  @media ${device.laptop} {
    clip-path: initial;
  }

  .forgetPassword_title {
    padding-top: 124px;
    padding-left: 6%;
    @media ${device.laptop} {
      padding-top: 40px;
    }
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 34px;
      line-height: 40px;
      letter-spacing: -0.04em;
      color: var(--color-gray-50);
    }
  }
  .forgetPassword_text {
    margin-top: 40px;
    @media ${device.tablet} {
      margin-top: -10px;
    }

    & p:first-child {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 60px;
      line-height: 72px;
      letter-spacing: -0.04em;
      color: var(--color-gray-50);
      @media ${device.tablet} {
        letter-spacing: -0.02em;
        font-size: 34px;
      }
      @media ${device.mobileM} {
        font-size: 24px;
      }
    }
    & p:last-child {
      font-family: "Inknut Antiqua";
      font-style: normal;
      font-weight: 400;
      font-size: 34px;
      line-height: 40px;
      letter-spacing: -0.04em;
      color: var(--color-gray-50);
      margin-top: 8px;
      @media ${device.tablet} {
        font-size: 24px;
      }
      @media ${device.mobileM} {
        margin-top: 16px;
        font-size: 16px;
      }
    }
  }
`;
