import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { DashboardPage } from "../pages/Dashboard";

// import Layout from "../layout";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import LoginPage from "../pages/LoginPage";

import NotFoundPage from "../pages/NotFoundPage/";

import SignUpPage from "../pages/SignUpPage";

import ProtectedRoute from "./ProtectedRoute";

export const index = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
