import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // if (movies === null) return; if movies not present return from here below is same
  if (!movies) return;

  const mainMovie = movies[5];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
