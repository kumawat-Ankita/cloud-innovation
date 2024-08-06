import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({ onFilterChange, onSortChange }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const ratings = params.getAll('rating');
        const order = params.get('order');

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

        navigate({ search: params.toString() });
    };

    const handleSortChange = (e) => {
        const { value } = e.target;
        const params = new URLSearchParams(location.search);
        params.set('order', value);

        navigate({ search: params.toString() });
    };

    return (
        <div className="sidebar">
            <h3>Filter by Rating</h3>
            <div className="rating-filters">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="rating-label">
                        <input
                            type="checkbox"
                            value={rating}
                            onChange={handleFilterChange}
                            className="rating-checkbox"
                            checked={new URLSearchParams(location.search).getAll('rating').includes(String(rating))}
                        />
                        <span className="rating-stars">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className={`star ${star <= rating ? 'filled' : ''}`}>★</span>
                            ))}
                        </span>
                        {rating}
                    </label>
                ))}
            </div>
            <h3>Sort by Year</h3>
            <div className="sort-options">
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="asc"
                        onChange={handleSortChange}
                        checked={new URLSearchParams(location.search).get('order') === 'asc'}
                    />
                    Ascending
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="desc"
                        onChange={handleSortChange}
                        checked={new URLSearchParams(location.search).get('order') === 'desc'}
                    />
                    Descending
                </label>
            </div>
        </div>
    );
};

export default SideBar;
