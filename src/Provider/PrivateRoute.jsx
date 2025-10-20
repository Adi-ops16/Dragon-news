import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = use(AuthContext) || {}
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateRoute;