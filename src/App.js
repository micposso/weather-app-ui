import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityInput from './components/cityinput';
import CurrentWeather from './components/currentweather';
import Forecast from './components/forecast';

const API_KEY = 'b2efe5292c39fd73143a306f48ffcd6f';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();
      const formattedData = data.list.map((item) => ({
        date: item.dt_txt,
        temperature: item.main.temp,
        description: item.weather[0].description,
      }));
      setForecastData(formattedData);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleCitySubmit = (city) => {
    setCity(city);
    fetchWeather();
    fetchForecast();
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center">Weather App</h1>
          <CityInput onCitySubmit={handleCitySubmit} />
          {weatherData && weatherData.main && (
            <CurrentWeather
              city={weatherData.name}
              temperature={weatherData.main.temp}
              description={weatherData.weather[0].description}
            />
          )}
          {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherApp;
