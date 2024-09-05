import { useState } from 'react';
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';


function App() {
  const [city, setCity] = useState(0)
  const [result, setResult] = useState(null);

  const loadCity = (city) => {
    const params = new URLSearchParams({ cityName: city });
    //console.log(params);
    fetch(`http://localhost:6100/api/weather?${params}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setCity(city);
        setResult(result);
      });
  }

  return (
    <div className="App">
     <WeatherForm city={city} /*handleSubmit={handleSubmit}*//>
      {!result ? <p>Please use the Form to see Real Data</p> : <WeatherCard data={result} /> }
    </div>
  )
}

export default App;
