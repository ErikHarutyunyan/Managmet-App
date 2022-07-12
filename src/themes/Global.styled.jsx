// StyledComponents - globalStyles.js
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :active,
  :focus {
    outline: 0;
  }
  a:active,
  a:focus {
    outline: 0;
  }
  aside,
  footer,
  header,
  nav {
    display: block;
  }
  body,
  html,#root {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }
  button,
  input,
  textarea {
    font-family: 'Inter', sans-serif;
  }
  input::-ms-clear {
    display: none;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    box-sizing: border-box;
  }

  :root {
    --color-white: #ffffff;
    --color-gray-100: #F1F5F9;
    --color-gray-50: #F8FAFC;
    --color-gray-300: #CBD5E1;
    --color-gray-400: #94A3B8;
    --color-gray-500:#64748b;
    --color-gray-600: #475569;
    --color-green-100:#D1FAE5;
    --color-green-500:#10B981;
    --color-blue-500:#1D4ED8;
    --color-blue-400:#3460DC;
    --color-error: #c70b0b;
    --shadow-xxl: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);
  }
  main {
    max-width: 1440px;
    margin: 0 auto;
    height: calc(100% - 100px) ;
    padding: 40px 80px 40px 60px;
  }
  body.active-modal {
    overflow-y: hidden;
    
  }
`;

const GlobalContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;
export default GlobalContainer;
