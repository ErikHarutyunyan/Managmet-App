// StyledComponents - Header.styled.jsx
import styled from "styled-components";

export const HeaderBox = styled.header`
  background: var(--color-gray-100);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .header_left {
    display: flex;
    align-items: center;
    &-logo {
      width: 40px;
      height: 40px;
      & img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    &-userInfo {
      margin-left: 16px;
      & p {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: var(--color-gray-600);
      }
    }
  }
`;
