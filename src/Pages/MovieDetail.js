import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../Redux/MovieReducer/action';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movies, isLoading, isError } = useSelector((state) => state.movie);
    console.log("Moives data", movies)
    useEffect(() => {
        if (movies.length === 0) {
            dispatch(fetchMovies());
        }
    }, [dispatch, movies.length]);

    const movie = movies.find((movie) => movie.id === Number(id));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching movie details.</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-detail-container">
            <img className="movie-image" src={movie.Poster} alt={movie.Title} />
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-plot">{movie.Plot}</p>
            <p className="movie-year">Release Year: {movie.Year}</p>
            <p>Type : {movie.Type}</p>
            <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieDetail;
