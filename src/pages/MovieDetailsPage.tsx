/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id!);
      setMovie(data);
    };
    fetchDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <MovieDetails movie={movie}></MovieDetails>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;