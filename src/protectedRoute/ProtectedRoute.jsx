import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);

  if (!admin || !admin.name) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
