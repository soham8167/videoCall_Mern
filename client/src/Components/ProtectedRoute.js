// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { isLoggedIn, isAdmin } from '../utils/auth.js'; // Import isAdmin function

const ProtectedRoute = ({ children, adminOnly }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/" />;
  }
  
  else if (adminOnly && !isAdmin()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
