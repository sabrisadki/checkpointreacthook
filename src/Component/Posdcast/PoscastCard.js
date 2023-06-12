import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PodcastCard = ({ podcast }) => {
  const { title, description, posterURL, rating } = podcast;

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

export default PodcastCard;
