import { useState } from "react";

function WeatherForm(props) {
  const [city, setCity] = useState('');
  
  const onChange = (e) => {
    setCity(ev.target.value);
  }


  return <div className="weather">"weather"</div>;
}

export default WeatherForm;
