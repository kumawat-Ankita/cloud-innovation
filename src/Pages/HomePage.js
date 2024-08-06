import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import './HomePage.css';

const HomePage = () => {
    const [filter, setFilter] = useState([]);
    const [sort, setSort] = useState('');
    const { movies } = useSelector((state) => state.movie);

    const filteredMovies = useMemo(() => {
        return movies.filter((movie) =>
            filter.length > 0 ? filter.includes(String(movie.rating)) : true
        );
    }, [movies, filter]);

    const sortedMovies = useMemo(() => {
        return filteredMovies.slice().sort((a, b) => {
            if (sort === 'asc') {
                return a.Year - b.Year;
            }
            if (sort === 'desc') {
                return b.Year - a.Year;
            }
            return 0;
        });
    }, [filteredMovies, sort]);

    return (
        <div className="home-container">
            <SideBar onFilterChange={setFilter} onSortChange={setSort} />
            <MovieList movies={sortedMovies} />
        </div>
    );
};

export default HomePage;
