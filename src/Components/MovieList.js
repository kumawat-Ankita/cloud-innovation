import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, isLoading, isError } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching movies.</div>;
    }

    return (
        <div data-testid="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
