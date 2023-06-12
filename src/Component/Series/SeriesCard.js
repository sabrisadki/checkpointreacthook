import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SeriesCard = ({ series }) => {
  const { title, description, posterURL, rating } = series;

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={posterURL} />
    <Card.Body>
      <Card.Title>{title}<br /> rating: {rating}</Card.Title>
      <Card.Text>
        {description} 
      </Card.Text>
      <Button variant="primary">Watch</Button>
    </Card.Body>
  </Card>
  );
};

export default SeriesCard;
