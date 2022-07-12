import { MainCategoriesWrapper } from "./MainCategories.styled";
import mainCategoriesLogo from "../../assets/img/premium.png";
import { MainCategoriesItems } from "../MainCategoriesItems";
import { nursIcon, memIcon, pendIcon } from "../Images";
export const MainCategories = () => {
  let categoriesData = [
    {
      id: 1,
      categoriesLogo: pendIcon,
      categoriesNews: "35",
      categoriesText: "Administration",
      categoriesOption: ["COVID Arr.", "Staff Status", "Ctr. Activity"],
      categoriesOptionBg: "#FFFBEB",
    },
    {
      id: 2,
      categoriesLogo: memIcon,
      categoriesNews: "35",
      categoriesText: "Member Updates",
      categoriesOption: ["COVID Arr.", "Staff Status", "Ctr. Activity"],
      categoriesOptionBg: "#E5E5E5",
    },
    {
      id: 3,
      categoriesLogo: nursIcon,
      categoriesNews: "35",
      categoriesText: "Nursing Care",
      categoriesOption: ["COVID Arr.", "Staff Status", "Ctr. Activity"],
      categoriesOptionBg: "#FEF2F2",
    },
  ];
  return (
    <MainCategoriesWrapper>
      <div className="mainCategories_container">
        <div className="mainCategories_container-logo">
          <img src={mainCategoriesLogo} alt="mainCategoriesLogo" />
        </div>
        <div className="mainCategories_container-text">
          <p>Categories</p>
        </div>
        <div className="mainCategories_container-items">
          {categoriesData.map((item)=>{
            console.log(item)
            return <MainCategoriesItems key={item.id} data={item} />
          })}

        </div>
      </div>
    </MainCategoriesWrapper>
  );
};
