import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Forecast = ({ forecastData }) => {
  const futureData = forecastData.slice(0, 6); // Get data for the next 6 days

  const getDayName = (index) => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + index + 1);
    const options = { weekday: 'long' };
    return futureDate.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2></h2>
      <Row>
        {futureData.map((data, index) => (
          <Col key={data.date}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{getDayName(index)}</Card.Title>
                <Card.Text>Temperature: {data.temperature}°F</Card.Text>
                <Card.Text>Overcast: {data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Forecast;
