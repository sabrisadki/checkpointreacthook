import React from 'react';
import MovieCard from './MovieCard';
import movies from './movieData';



// Rest of your component code...


const MovieList = () => {
  return (
    <>
    <h4 style={{ color:'blue'}}>Movies List</h4> <br />
    <div style={{ display: 'flex' }}>
      
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
    </>
    );
};

export default MovieList;
