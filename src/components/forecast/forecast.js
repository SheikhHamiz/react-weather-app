import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const daysInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(daysInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, daysInWeek)
    );

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>
                                        {Math.round(item.main.temp_min)} °C  / {Math.round(item.main.temp_max)} °C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Wind</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='label-value'>Feels like</label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
export default Forecast;