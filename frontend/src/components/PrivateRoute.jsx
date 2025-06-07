// frontend/src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // Check if user is authenticated (e.g., by checking for a token in localStorage)
    const isAuthenticated = localStorage.getItem('token'); // Or check your global state

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;