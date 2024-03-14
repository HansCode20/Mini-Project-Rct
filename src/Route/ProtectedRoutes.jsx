import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("access_token");

  // Jika pengguna belum login, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoutes;
