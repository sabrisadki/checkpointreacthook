import React from 'react';
import SeriesCard from './SeriesCard';
import series from './seriessData';

const SeriesList = () => {
  return (
    <>
    <h4 style={{ color:'blue'}}>Series List</h4> <br />
    <div style={{ display: 'flex' }}>
      {series.map((series, index) => (
        <SeriesCard key={index} series={series} />
      ))}
    </div>
    </>
  );
};

export default SeriesList;