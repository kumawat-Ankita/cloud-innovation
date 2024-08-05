import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const { movies } = useSelector((state) => state.movie);
    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Plot}</p>
            <p>Year: {movie.Year}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieDetail;
