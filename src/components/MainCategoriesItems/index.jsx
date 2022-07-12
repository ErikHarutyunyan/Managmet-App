import {
  MainCategoriesBoxWrapper,
  MainPageBoxSecond,
} from "./MainCategoriesBox.styled";

export const MainCategoriesItems = ({ data }) => {
  console.log(data, "items");
  return (
    <MainCategoriesBoxWrapper>
      <div className="mainPage_categories-container">
        <div className="mainPage_box-first">
          <div className="mainPage_box-first_container">
            <img src={data.categoriesLogo} alt="" />
            <span>{data.categoriesText}</span>
          </div>
          <div className="mainPage_box-news">
            <span>{data.categoriesNews}</span>
            <span>News</span>
          </div>
        </div>
        <MainPageBoxSecond
          categoriesOptionBg={data.categoriesOptionBg}
          className="mainPage_box-second"
        >
          {data.categoriesOption.map((option, index) => {
            return (
              <div className="option_item" key={index}>
                <span>{option}</span>
              </div>
            );
          })}
        </MainPageBoxSecond>
      </div>
    </MainCategoriesBoxWrapper>
  );
};
