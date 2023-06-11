import React, { useRef } from 'react';

const PodcastData = ({ setPodcasts }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const handleAddPodcast = () => {
    const newPodcast = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: parseFloat(ratingRef.current.value),
    };

    setPodcasts((prevPodcasts) => [...prevPodcasts, newPodcast]);

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    posterURLRef.current.value = '';
    ratingRef.current.value = '';
  };

  return (
    <div className="add-podcast">
      <h2>Add a New Podcast</h2>
      <input type="text" placeholder="Title" ref={titleRef} />
      <input type="text" placeholder="Description" ref={descriptionRef} />
      <input type="text" placeholder="Poster URL" ref={posterURLRef} />
      <input type="number" placeholder="Rating" min="0" max="10" step="0.1" ref={ratingRef} />
      <button onClick={handleAddPodcast}>Add Podcast</button>
    </div>
  );
};

export default PodcastData;
