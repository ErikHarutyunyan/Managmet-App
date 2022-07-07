import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Outlet } from "react-router-dom";
import { selectUserActive } from "../app/features/currentUser/currentUserSlice";
import { getCookie } from "../utils";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  // const auth = useSelector(selectUserActive);
 

  const auth = getCookie()
  if (!auth.loginUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

// const ProtectedRoute = ({ path, exact, children }) => {
//   console.log(auth);
//   return auth ? (
//     <Route path={path} exact={exact}>
//       {children}
//     </Route>
//   ) : (
//     <Navigate to="/login" />
//   );
// };

export default ProtectedRoute;
