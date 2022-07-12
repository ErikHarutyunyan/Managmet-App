import styled from "styled-components";

export const MainCategoriesWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* Neutral/Gray 50 */
  background: #f8fafc;
  /* Neutral / Gray 300 */
  border: 1px solid #cbd5e1;
  /* shadow-xxl */
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 16px;
  overflow: hidden;
  .mainCategories_container-logo{
    width: 100%;
    img {
      width: 100%;
    }
  }
  .mainCategories_container-text {
    margin: 32px 0;
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height, or 133% */
      letter-spacing: -0.02em;
      /* Neutral / Gray 500 */
      color: #64748b;
    }
  }

  .mainCategories_container-items{
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`;
