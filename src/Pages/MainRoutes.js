import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';


const MainRoutes = () => {
    const someState = useSelector(state => state.someState);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route
                path="/movie/:id"
                element={someState ? <MovieDetail /> : <Navigate to="/login" />}
            />
        </Routes>
    );
};

export default MainRoutes;
