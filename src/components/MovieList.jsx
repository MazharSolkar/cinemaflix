import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6 text-white'>
      <h1 className='text-3xl py-2 font-bold'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies &&
            movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard posterPath={movie?.poster_path} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
