import React from 'react';

const SeriesCard = ({ series }) => {
  const { title, description, posterURL, rating } = series;

  return (
    <div className="series-card">
      <h3>{title}</h3>
      
      <img src={posterURL} alt={title} />
      <p>Rating: {rating}</p>
      <p>{description}</p>
    </div>
  );
};

export default SeriesCard;
