import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center mb-auto">
        <ClipLoader />;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
