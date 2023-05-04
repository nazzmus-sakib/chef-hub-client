import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
