import styled from "styled-components";

export const MainCategoriesBoxWrapper = styled.div`
  max-width: 368px;
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  .mainPage_box-first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .mainPage_box-first_container {
    display: flex;
    align-items: center;
    column-gap: 8px;
    span {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      /* Neutral / Gray 500 */
      color: #64748b;
    }
  }
  .mainPage_box-news {
    padding: 8px 12px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
    /* Neutral / Gray 50 */
    color: #f8fafc;
    background: #34d399;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 4px;
    span {
      display: inline-block;
    }
  }
`;

export const MainPageBoxSecond = styled.div`
  margin-top: 16px;
  display: flex;
  column-gap: 8px;
  justify-content: space-between;
  & div {
    width: 33%;
    padding-top: 10px;
    padding-bottom: 10px;
    background:${props => props.categoriesOptionBg};
    border-radius: 5px;
    text-align: center;
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */
      text-align: center;
      letter-spacing: -0.02em;
      /* Neutral / Gray 500 */
      color: #64748b;
    }
  }
`;
