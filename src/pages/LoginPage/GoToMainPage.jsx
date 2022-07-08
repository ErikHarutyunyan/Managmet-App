import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
// Import Styled
import { GoToMainPageWrapper, GoToMainPageInfo } from "./GoToMainPage.styled";
import { Spinner } from "../Loader/Spinner";
import ProgressBar from "../Loader/Progress.jsx/index.jsx";

const GoToMainPage = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 1;

        if (newValue === 100) {
          clearInterval(interval);
          // navigate("/dashboard");
        }

        return newValue;
      });
    }, 90);
  }, []);

  return (
    <>
      <GoToMainPageWrapper>
        <div className="goToMainPage_container">
          <div className="goToMainPage">
            <Spinner />
          </div>
          <GoToMainPageInfo>
            <h1>Going to the Main Page</h1>
            <h3>Thanks for your patience!</h3>
          </GoToMainPageInfo>
          <ProgressBar color={"#10B981"} width={"100%"} value={value} max={100}/>
        </div>
      </GoToMainPageWrapper>
    </>
  );
};

export default GoToMainPage;
