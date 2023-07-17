import {Accordion,AccordionItemHeading,AccordionItem,AccordionItemPanel, AccordionItemButton} from "react-accessible-accordion";
import './forecast.css'

const days=['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];


const Forecast = ({data}) =>{
    const dayInAWeek=new Date().getDay();
    const forecastDays=days.slice(dayInAWeek,days.length).concat(days.slice(0,dayInAWeek));

    return(
        <>
        <label className="title">Daily Forecast</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=>
            <AccordionItem key={idx}>
                <AccordionItemHeading>
                    <AccordionItemButton className="forecast">
                        <div className="daily">
                            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                            <label className="day">{forecastDays[idx]}</label>
                            <span className="tooltiptext">Click Me For More Details</span>
                            <label className="description"> {item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp_min-273.15)}°C/ {Math.round(item.main.temp_max-273.15)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="grid-details" name="Click for more details">
                        <div className="grid-details-item">
                            <span className="grid-item-title">Pressure </span>
                            <span className="grid-item-value">{item.main.pressure} mbar</span>
                        </div>
                        <div className="grid-details-item">
                            <span className="grid-item-title">Wind Speed </span>
                            <span className="grid-item-value">{item.wind.speed} m/s</span>
                        </div>
                        <div className="grid-details-item">
                            <span className="grid-item-title">Humidity </span>
                            <span className="grid-item-value">{item.main.humidity} %</span>
                        </div>
                        <div className="grid-details-item">
                            <span className="grid-item-title">Feels like </span>
                            <span className="grid-item-value">{Math.round(item.main.feels_like-273.15)}°C </span>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            )}
        </Accordion>
        </>
    )
}

export {Forecast}
