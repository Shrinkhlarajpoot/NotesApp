import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../frontend/context";



const Privateroutes = () => {
const {auth} =useAuth()
  return auth.token ?<Outlet/>: <Navigate to="/login" />;
};
export { Privateroutes };
