import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND } from '../utils/constant';

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute inset-0 -z-10'>
        <img
          className='w-full h-full object-cover'
          src={BACKGROUND}
          alt='banner'
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
