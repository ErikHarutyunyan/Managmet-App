import styled from "styled-components";

export const ButtonWrapper = styled.button`
  &.btn_banner {
    padding: 10px 16px;
    background: #f8fafc;
    opacity: 0.9;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #64748b;
      margin-left: 6px;
    }
  }
`;
