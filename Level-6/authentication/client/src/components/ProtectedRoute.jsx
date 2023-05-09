import React from "react";
import { Navigate } from "react-router-dom";
import './Styles.css'
export default function ProtectedRoute(props) {
  const { token, children, redirectTo } = props;
  return token ? children : <Navigate to={redirectTo} />;
}
