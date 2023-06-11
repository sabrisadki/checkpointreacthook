import React from 'react';
import PodcastCard from './PoscastCard';
import podcasts from './podcastsData';

const PodcastList = () => {
  return (
    <>
    <h4 style={{color:'blue'}}>Podcasts List</h4>
    <div style={{ display: 'flex' }}>
      {podcasts.map((podcast, index) => (
        <PodcastCard key={index} podcast={podcast} />
      ))}
    </div>
    </>
    );
};

export default PodcastList;
