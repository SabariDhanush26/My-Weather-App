import './App.css';
import { Search } from './components/search/search';
import {CurrentWeather} from './components/current-weather/current-weather';

function App() {
  const handleOnSearchChange = (searchData)=>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}
export {App};

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


