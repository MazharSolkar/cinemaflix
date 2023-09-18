import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from '../components/Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((Store) => Store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
          - cards * n
      
      */}
    </div>
  );
};

export default Browse;
