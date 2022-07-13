import Banner from "../../components/Banner/Banner";
import { MainCategories } from "../../components/MainCategories";
import Modal from "../../components/EntryType";
import { MainPageWrapper } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <>
      <MainPageWrapper>
        <div className="container_left">
          <MainCategories />
        </div>
        <div className="container_right">
          <Banner />
        </div>
      </MainPageWrapper>
    </>
  );
};
