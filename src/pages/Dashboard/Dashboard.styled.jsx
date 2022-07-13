import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  column-gap: 40px;
  position: relative;
  .active-modal & {
    aside {
      filter: blur(3px);
    }
    .content {
      filter: blur(3px);
    }
  }
  .content {
    width: 100%;
    position: relative;
  }
`;
