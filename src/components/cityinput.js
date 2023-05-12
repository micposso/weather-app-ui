import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; // Import magnifier glass icon from React Icons

const CityInput = ({ onCitySubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(city);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <div className="input-group">
          <Form.Control
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="primary" type="submit">
            <BsSearch /> {/* Magnifier glass icon */}
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default CityInput;
