import React from 'react';

const PodcastCard = ({ podcast }) => {
  const { title, description, posterURL, rating } = podcast;

  return (
    <div className="podcast-card">
      <h3>{title}</h3>
      <img src={posterURL} alt={title} />
      <p>Rating: {rating}</p>
      <p>{description}</p>
    </div>
  );
};

export default PodcastCard;
