import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/hooks';
import { fetchMovies } from '../redux/moviesSlice';
import { RootState } from '../redux/store';
import MovieTable from '../components/MovieTable';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, status } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ query: 'Pokemon' }));
  }, [dispatch]);

  return (
    <div className="justify-between w-full h-full md:max-w-[1240px]">
      <SearchBar />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <MovieTable movies={movies} />}
    </div>
  );
};

export default Home;