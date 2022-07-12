import styled from "styled-components";
import { BannerBg } from "../Images";

export const BannerWrapper = styled.div`
  max-width: 731px;
  width: 100%;
  height: ${(props) => (props.spaceBanner ? "226px" : "136px")};
  background-image: url(${BannerBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  transition: all 0.3s ease;

  .banner_container {
    position: relative;
    padding: 24px;
    height: 100%;
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -0.04em;
    color: #f8fafc;
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #f8fafc;
    margin-top: 2px;
    opacity: ${(props) => (props.spaceBanner ? "1" : "0")};
    transition: all 0.5 ease;
  }
  .search_icon {
    position: absolute;
    display: inline-block;
    top: 24px;
    right: 24px;
  }
  .btn_wrapper {
    display: flex;
    column-gap: 16px;
    position: absolute;
    bottom: 24px;
    right: 24px;
  }

  .btn_space {
    display: none;
    max-width: 88px;
    width: 100%;
    position: absolute;
    bottom: 24px;
    left: 25%;
    button {
      background: rgba(248, 250, 252, 0.8);
      padding: 4px 32px;
      border-radius: 16px;
    }
  }
  &:hover {
    .btn_space {
      display: block;
    }
  }
`;
