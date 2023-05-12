import React from 'react';
import { Card } from 'react-bootstrap';
import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Import icons from React Icons

const CurrentWeather = ({ city, temperature, description }) => {
  let weatherIcon;

  // Determine which icon to display based on weather description
  switch (description) {
    case 'Clouds':
      weatherIcon = <WiCloud />;
      break;
    case 'clear sky':
      weatherIcon = <WiDaySunny />;
      break;
    case 'Rain':
      weatherIcon = <WiRain />;
      break;
    case 'Snow':
      weatherIcon = <WiSnow />;
      break;
    default:
      weatherIcon = null;
      break;
  }

  return (
    <div>
      <h2>Current Weather</h2>
      <Card>
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>{temperature}°F</Card.Text>
          <Card.Text>
            {weatherIcon && (
              <span style={{ marginLeft: '5px' }}>{weatherIcon}</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrentWeather;
