import React, { useRef } from 'react';

const SeriesData = ({ setSeries }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const handleAddSeries = () => {
    const newSeries = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: parseFloat(ratingRef.current.value),
    };

    setSeries((prevSeries) => [...prevSeries, newSeries]);

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    posterURLRef.current.value = '';
    ratingRef.current.value = '';
  };

  return (
    <div className="add-series">
      <h2>Add a New Series</h2>
      <input type="text" placeholder="Title" ref={titleRef} />
      <input type="text" placeholder="Description" ref={descriptionRef} />
      <input type="text" placeholder="Poster URL" ref={posterURLRef} />
      <input type="number" placeholder="Rating" min="0" max="10" step="0.1" ref={ratingRef} />
      <button onClick={handleAddSeries}>Add Series</button>
    </div>
  );
};

export default SeriesData;
