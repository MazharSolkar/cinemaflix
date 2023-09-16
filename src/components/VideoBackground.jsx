import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={'https://www.youtube.com/embed/' + trailerVideo?.key}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>{' '}
      i want this video to auto play
    </div>
  );
};

export default VideoBackground;
