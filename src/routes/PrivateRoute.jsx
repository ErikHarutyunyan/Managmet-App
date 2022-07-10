import React from "react";
import { Navigate } from "react-router-dom";

import { getCookie } from "../utils";

const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const auth = getCookie();
  if (!auth.loginUser ) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
