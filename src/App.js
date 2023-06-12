import React, { useState } from 'react';
import Navbarr from './Component/Navbar';
import Footer from './Component/Footer';
import MovieList from './Component/Movies/MovieList';
import MovieFilter from './Component/Movies/MoviesFilter';
import MovieData from './Component/Movies/Moviesdata';
import SeriesList from './Component/Series/SeriesList';
import SeriesFilter from './Component/Series/SeriesFilter';
import SeriesData from './Component/Series/SeriesData';
import PodcastList from './Component/Posdcast/PodcastList';
import PodcastFilter from './Component/Posdcast/PodcastFilter';
import PodcastData from './Component/Posdcast/PodcastData';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  const handleMovieTitleChange = (title) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleMovieRatingChange = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= rating);
    setFilteredMovies(filtered);
  };

  const handleSeriesTitleChange = (title) => {
    // Filter logic for series
  };

  const handleSeriesRatingChange = (rating) => {
    // Filter logic for series
  };

  const handlePodcastTitleChange = (title) => {
    // Filter logic for podcasts
  };

  const handlePodcastRatingChange = (rating) => {
    // Filter logic for podcasts
  };

  return (
    <div className="app">
      {/* Navbar */}
      <Navbarr />

      {/* Movie Section */}
      <h2>Movies</h2>
      <MovieFilter onTitleChange={handleMovieTitleChange} onRatingChange={handleMovieRatingChange} />
      <MovieList movies={filteredMovies} />
      <MovieData setMovies={setMovies} setFilteredMovies={setFilteredMovies} />

      {/* Series Section */}
      <h2>Series</h2>
      <SeriesFilter onTitleChange={handleSeriesTitleChange} onRatingChange={handleSeriesRatingChange} />
      <SeriesList series={series} />
      <SeriesData setSeries={setSeries} />

      {/* Podcast Section */}
      <h2>Podcasts</h2>
      <PodcastFilter onTitleChange={handlePodcastTitleChange} onRatingChange={handlePodcastRatingChange} />
      <PodcastList podcasts={podcasts} />
      <PodcastData setPodcasts={setPodcasts} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
