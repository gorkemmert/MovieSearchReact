import React from 'react';

interface MovieDetailsProps {
  movie: {
    Title: string;
    Poster: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Runtime: string;
    imdbRating: string;
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="flex gap-5 p-4 bg-gray-100 rounded-lg shadow-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-48 h-72 object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{movie.Title}</h1>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">Genre:</strong> {movie.Genre}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">Director:</strong> {movie.Director}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">Actors:</strong> {movie.Actors}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">Plot:</strong> {movie.Plot}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">Runtime:</strong> {movie.Runtime}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold text-gray-900">IMDb Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;