// LogIn.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { Navigate, useLocation } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');//valid credentials from reqres.in
    const [password, setPassword] = useState('cityslicka'); //valid credentials from reqres.in
    const dispatch = useDispatch();
    const { isLoading, isAuth, isError } = useSelector((state) => state.auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    // Redirect if authenticated
    if (isAuth) {
        return <Navigate to={from} />;
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                {isError && <div className="error-message">{isError}</div>}
            </form>
        </div>
    );
};

export default LogIn;
