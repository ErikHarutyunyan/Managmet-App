import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";

// import Layout from "../layout";

import LoginPage from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";

import NotFoundPage from "../pages/NotFoundPage/";

import SignUpPage from "../pages/SignUpPage";

import PrivateRoute from "./PrivateRoute";

export const index = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        >
          <Route index element={<MainPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
