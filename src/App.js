import "./App.css";
import { CurrentWeather } from "./components/current-weather/current-weather";
import { Search } from "./components/search/search";
import { Weather_API } from "./components/search/cities";
import { API_Key } from "./components/search/cities";
import { useState } from "react";
import { Forecast } from "./components/forecast/forecast";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${Weather_API}weather/?lat=${lat}&lon=${lon}&appid=${API_Key}`
    );
    const forecastFetch = fetch(
      `${Weather_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div>{currentWeather && <CurrentWeather data={currentWeather} />}</div>
      <div>
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
};
export { App };

// Here pascal naming convention is used
// function MyButton(){
//   return(<a href='https://google.com' target='_blank' rel='noreferrer'><button className='mybutton'>This is a button</button></a>);
// };

// function MyApp(){
//   return(
//   <div className='App-header'>
//     <h3>Click Me</h3>
//     <MyButton/>
//   </div>);

// };