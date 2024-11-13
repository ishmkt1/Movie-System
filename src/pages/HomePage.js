import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { searchResults } = useSelector((state) => state.movies);

  return (
    <div>
      <SearchBar />
      <div>
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
