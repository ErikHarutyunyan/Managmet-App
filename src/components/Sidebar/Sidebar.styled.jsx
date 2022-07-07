import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  &.hide {
    width: 88px;
  }
  &.show {
    width: 240px;
  }
  height: 100%;
  background: var(--color-gray-50);
  border: 1px solid var(--color-gray-300);
  box-shadow: var(--shadow-xxl);
  border-radius: 16px;
  padding: 40px 16px;
  transition: all 0.5s ease;
  & nav {
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & ul {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
  }
  & ul:first-child {
    row-gap: 40px;
  }
  & ul li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    & a {
      display: flex;
      align-items: center;
      & span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        color: #f8fafc;
        display: none;
      }
    }
    &.active {
      justify-content: initial;
      width: auto;
      transition: all 0.5s ease;
      & a {
        & span {
          display: inline-block;
          transition: all 1s ease;
        }
      }
    }
  }
  & ul li {
    &:hover {
      background-color: var(--color-blue-400);
      .logo_home {
        path {
          fill: var(--color-white);
        }
      }
      .logo_handower {
        path {
          stroke: var(--color-white);
        }
      }
      .logo_roster {
        path {
          fill: var(--color-white);
          stroke: var(--color-white);
        }
      }
      .logo_daily {
        path {
          stroke: var(--color-white);
        }
      }
      .logo_member {
        stroke: var(--color-white);
      }
      .logo_setting {
        path:first-child {
          fill: var(--color-white);
        }
        path {
          stroke: var(--color-white);
        }
      }
    }
  }
`;
