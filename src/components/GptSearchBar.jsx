import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to get GPT API and get Mocie Results

    const gptQuery =
      'Act as a Movie Recommendation System and suggest some movies for the query: ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma seperated like the example result give ahead. Example Result: Elemental, Shole, Don, Koi Mil Gaya, Golmaal';

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(completion.choices);
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form
        className=' bg-black w-1/2 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className='p-4 m-4 col-span-9'
          type='text'
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className='col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4'
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
