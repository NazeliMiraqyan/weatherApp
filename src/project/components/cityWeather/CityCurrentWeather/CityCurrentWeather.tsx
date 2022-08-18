import React from 'react';
import { store } from '../../../mobx/store';
import { observer } from 'mobx-react';
import CircleLoader from 'react-spinners/CircleLoader';
import { useState, useEffect } from 'react';
import { Ioverride } from '../../../mobx/types';
import * as Style from './CityCurrentWeather.style'

const CityCurrentWeather: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const override: Ioverride = {
    display: 'block',
    margin: '0 auto',
    marginTop: '85px',
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200)
  }, []);

  return (
    <div>
      {store.WeatherData.map((items, index) => {
        return (
          <div key={index}>
            {loading === true ? (
              <CircleLoader
                color={'#9013FE'}
                loading={loading}
                cssOverride={override}
                size={150}
              />
            ) : (
              store.currentItem.map((current) => {
                let temp = store.tempNow(current.main.temp)

                return (
                  <Style.CurrentWeather key={items.data.city.id}>
                    {current.weather.map((day) => {
                      return (
                        <div key={day.id}>
                          <Style.P>{items.data.city.name}</Style.P>
                          <Style.H2>
                            {!temp
                              ? Math.floor(current.main.temp - 273.15) + '°C'
                              : temp}
                          </Style.H2>
                          <Style.Img
                            src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                          />
                          <h3>{day.main}</h3>
                        </div>
                      );
                    })}
                  </Style.CurrentWeather>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
}

export default observer(CityCurrentWeather);
