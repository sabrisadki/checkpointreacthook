import React, { useRef } from 'react';

const MovieData = ({ setMovies, setFilteredMovies }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const handleAddMovie = () => {
    const newMovie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: parseFloat(ratingRef.current.value),
    };

    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setFilteredMovies((prevMovies) => [...prevMovies, newMovie]);

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    posterURLRef.current.value = '';
    ratingRef.current.value = '';
  };

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <input type="text" placeholder="Title" ref={titleRef} />
      <input type="text" placeholder="Description" ref={descriptionRef} />
      <input type="text" placeholder="Poster URL" ref={posterURLRef} />
      <input type="number" placeholder="Rating" min="0" max="10" step="0.1" ref={ratingRef} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieData;
