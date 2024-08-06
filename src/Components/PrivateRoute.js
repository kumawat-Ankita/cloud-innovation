// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuth } = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            element={isAuth ? <Element {...rest} /> : <Navigate to="/login" state={{ from: rest.location }} />}
        />
    );
};

export default PrivateRoute;
