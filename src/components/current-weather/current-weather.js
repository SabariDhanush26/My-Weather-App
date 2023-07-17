import "./current-weather.css";


const CurrentWeather = ({data}) => {
  return (
    
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} 
          style={{background:"white",resizeMode:"contain", marginTop:"10px"}}/>
      </div>
      <div className="Bottom">
        <p className="temperature">{Math.round(data.main.temp-273.15)}°C</p>
        <div className="Details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value"> {Math.round(data.main.feels_like-273.15)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> {data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind speed</span>
            <span className="parameter-value"> {data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {data.main.pressure} mbar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CurrentWeather };
