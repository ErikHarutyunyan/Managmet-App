import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Modal from "../../components/EntryType";
import Header from "../../components/Header/Index";
import { MainCategories } from "../../components/MainCategories";
import Sidebar from "../../components/Sidebar";
import { Main } from "./Dashboard.styled";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
        <Modal />
      </Main>
    </>
  );
};
