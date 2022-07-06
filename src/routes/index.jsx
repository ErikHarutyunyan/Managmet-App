import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";

// import Layout from "../layout";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import LoginPage from "../pages/LoginPage";

import NotFoundPage from "../pages/NotFoundPage/";
import SignUpPage from "../pages/SignUpPage";
const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
export const index = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgetPassword" element={<ForgetPasswordPage />} />
          <Route element={<ProtectedRoute user={true} />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="login" element={<p>Login Private</p>} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
