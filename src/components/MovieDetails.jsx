import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_OPTIONS, IMG_CDN, MOVIE_DETAILS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails } from '../utils/moviesSlice';
import Header from './Header';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.movieDetails);
  const { id } = useParams();

  const fethMovieDetails = async (id) => {
    const data = await fetch(MOVIE_DETAILS + id, API_OPTIONS);
    const json = await data.json();

    dispatch(addMovieDetails(json));
    console.log(json);
  };

  useEffect(() => {
    fethMovieDetails(id);
  }, []);

  return (
    <div className=''>
      {/* <Header /> */}
      {movie ? (
        <div>
          <img
            className='w-64'
            src={IMG_CDN + movie.poster_path}
            alt='MOVIE POSTER'
          />
          <h1>{movie.original_title}</h1>
          <h1>{movie.tagline}</h1>
          <h1>{movie.runtime} min</h1>
          <h1>{movie.overview}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
