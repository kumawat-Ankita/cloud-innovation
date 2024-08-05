import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = ({ onFilterChange, onSortChange }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const ratings = params.getAll('rating');
        const order = params.get('order');

        // Set initial state based on query params
        onFilterChange(ratings);
        onSortChange(order);
    }, [location.search, onFilterChange, onSortChange]);

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        const params = new URLSearchParams(location.search);
        const ratings = params.getAll('rating');

        if (checked) {
            ratings.push(value);
        } else {
            const index = ratings.indexOf(value);
            if (index > -1) {
                ratings.splice(index, 1);
            }
        }

        params.delete('rating');
        ratings.forEach((rating) => params.append('rating', rating));
        navigate.push({ search: params.toString() });
    };

    const handleSortChange = (e) => {
        const { value } = e.target;
        const params = new URLSearchParams(location.search);
        params.set('order', value);
        navigate.push({ search: params.toString() });
    };

    return (
        <div>
            <h3>Filter by Rating</h3>
            <div>
                <input type="checkbox" value="1" onChange={handleFilterChange} /> 1
                <input type="checkbox" value="2" onChange={handleFilterChange} /> 2
                <input type="checkbox" value="3" onChange={handleFilterChange} /> 3
                <input type="checkbox" value="4" onChange={handleFilterChange} /> 4
                <input type="checkbox" value="5" onChange={handleFilterChange} /> 5
            </div>
            <h3>Sort by Year</h3>
            <select onChange={handleSortChange}>
                <option value="">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};

export default SideBar;
