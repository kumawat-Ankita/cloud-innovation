import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const { movies } = useSelector((state) => state.movie);
    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-detail-container">

            <img className="movie-image" src={movie.Poster} alt={movie.Title} />
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-plot">{movie.Plot}</p>
            <p className="movie-year">Release Year: {movie.Year}</p>
            <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieDetail;
