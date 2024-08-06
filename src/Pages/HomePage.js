import React, { useState, useMemo, useEffect } from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import './HomePage.css';

const HomePage = () => {
    const [filter, setFilter] = useState([]);
    const [sort, setSort] = useState('');
    const dispatch = useDispatch();
    const { movies, isLoading, isError } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    const filteredMovies = useMemo(() => {
        return movies.filter((movie) =>
            filter.length > 0 ? filter.includes(String(movie.rating)) : true
        );
    }, [movies, filter]);

    const sortedMovies = useMemo(() => {
        return filteredMovies.sort((a, b) => {
            if (sort === 'asc') {
                return a.Year - b.Year;
            }
            if (sort === 'desc') {
                return b.Year - a.Year;
            }
            return 0;
        });
    }, [filteredMovies, sort]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching movies.</div>;
    }


    return (
        <div className="home-container">
            <SideBar onFilterChange={setFilter} onSortChange={setSort} />
            <MovieList movies={sortedMovies} />
        </div>
    );
};

export default HomePage;
