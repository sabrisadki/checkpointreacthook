import React from 'react';

const SeriesFilter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        step="0.1"
        onChange={(e) => onRatingChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default SeriesFilter;
