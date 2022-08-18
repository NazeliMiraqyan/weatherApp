import React from 'react';
import { store } from '../../../mobx/store';
import { observer } from 'mobx-react';
import * as Style from './CurrentWeather.style';

const CurrentWeather: React.FC = () => {
  return (
    <>
      {store.WeatherData.map((items, index) => {
        return (
          <div key={index}>
            {store.currentItem.length !== 0
              ? store.currentItem.map((item) => {
                  let temp = store.tempNow(item.main.temp);

                  return (
                    <Style.CurrentWeather key={item.dt}>
                      {item.weather.map((day) => {
                        return (
                          <div key={day.id}>
                            <Style.P>{items.data.city.name}</Style.P>
                            <Style.H2>
                              {!temp
                                ? Math.floor(item.main.temp - 273.15) + '°C'
                                : temp}
                            </Style.H2>
                            <Style.Img
                              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                            />
                            <h3>{day.main}</h3>
                          </div>
                        )
                      })}
                    </Style.CurrentWeather>
                  )
                })
              : null}
          </div>
        )
      })}
    </>
  )
}

export default observer(CurrentWeather);
