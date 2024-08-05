import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';

const HomePage = () => {
    const [filter, setFilter] = useState([]);
    const [sort, setSort] = useState('');
    const { movies } = useSelector((state) => state.movie);

    const handleFilterChange = (ratings) => {
        setFilter(ratings);
    };

    const handleSortChange = (order) => {
        setSort(order);
    };

    const filteredMovies = movies.filter((movie) =>
        filter.length > 0 ? filter.includes(String(movie.rating)) : true
    );

    const sortedMovies = filteredMovies.sort((a, b) => {
        if (sort === 'asc') {
            return a.Year - b.Year;
        }
        if (sort === 'desc') {
            return b.Year - a.Year;
        }
        return 0;
    });

    return (
        <div className="home-container">
            <SideBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
            <MovieList movies={sortedMovies} />
        </div>
    );
};

export default HomePage;
