import React from 'react';


const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <>
    <div className="Movie-card">
      <h4>{title}</h4>
      <img src={posterURL} alt={title} />
      <p>Rating: {rating}</p>
      <p>{description}</p>
    </div>
    </>
    );
};

export default MovieCard;
