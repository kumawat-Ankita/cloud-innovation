// MainRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';
import './MainRoutes.css';

const MainRoutes = () => {
    const { isAuth } = useSelector(state => state.auth);

    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogIn />} />
                <Route
                    path="/movie/:id"
                    element={isAuth ? <MovieDetail /> : <Navigate to="/login" state={{ from: window.location.pathname }} />}
                />
            </Routes>
        </div>
    );
};

export default MainRoutes;
