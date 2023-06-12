import React from 'react';
import MovieCard from './MovieCard';
import movies from './movieData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieList = () => {
  return (
    <Container>
      <Row>
        <Col xs='10'>
              <h4 style={{ color:'blue'}}>Movies List</h4> <br />
                    <div style={{ display: 'flex' }}>
                      
                      {movies.map((movie, index) => (<MovieCard key={index} movie={movie} /> ))}
                    </div>
        </Col>
      </Row>
    </Container>
    );
};

export default MovieList;