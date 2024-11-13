import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movieDetails.details.title}</h1>
      <p>{movieDetails.details.overview}</p>
      <h2>Cast</h2>
      <ul>
        {movieDetails.credits.cast.slice(0, 5).map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <h2>Recommendations</h2>
      <ul>
        {movieDetails.recommendations.slice(0, 5).map((recommendation) => (
          <li key={recommendation.id}>{recommendation.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
