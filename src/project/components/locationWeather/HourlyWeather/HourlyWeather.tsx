import React from 'react';
import { store } from '../../../mobx/store';
import { observer } from 'mobx-react';
import * as Style from './HourlyWeather.style';

const HourlyWeather: React.FC = () => {
  return (
    <>
      {store.WeatherData.map((_, Index: number) => {
        return (
          <div key={Index}>
            {store.hourlyWeather.length !== 0
              ? store.hourlyWeather.map((hourly) => {
                  let temp = store.tempNow(hourly.main.temp);

                  return (
                    <Style.HourlyItemWrapper key={hourly.dt}>
                      {hourly.weather.map((day) => {
                        return (
                          <Style.HourlyItem key={day.id}>
                            <p>{hourly.dt_txt.slice(10, 19)}</p>
                            <h2>
                              {!temp
                                ? Math.floor(hourly.main.temp - 273.15) + '°C'
                                : temp}
                            </h2>
                            <img
                              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                              alt=""
                            />
                          </Style.HourlyItem>
                        )
                      })}
                    </Style.HourlyItemWrapper>
                  )
                })
              : null}
          </div>
        )
      })}
    </>
  )
}

export default observer(HourlyWeather);;
