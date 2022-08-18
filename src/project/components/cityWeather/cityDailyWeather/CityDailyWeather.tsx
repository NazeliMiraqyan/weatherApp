import React from 'react';
import { store } from '../../../mobx/store';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import * as Style from './CityDailyWeather.style';
import { IDataTypes } from '../../../mobx/types';

const CityDailyWeather: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<IDataTypes[]>([]);

  useEffect(() => {
    setWeather(store.dayData);
    setLoading(true);
  }, []);

  return (
    <Style.DailyWeatheritemWrapper className="dailyWeatheritem">
      {loading === true
        ? weather.map((item) => {
            let temp = store.tempNow(item.main.temp);
            return (
              <Style.DailyWeatherItem
                key={item.dt}
                onClick={() => store.addToCurrentItem(item.dt, item.dt_txt)}
              >
                <p>{item.dt_txt.slice(5, 10)}</p>

                {item.weather.map((day) => {
                  return (
                    <Style.DailyWeatherItems key={item.dt}>
                      <h1>
                        {!temp
                          ? Math.floor(item.main.temp - 273.15) + '°C'
                          : temp}
                      </h1>
                      <div>
                        <Style.Img
                          src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                        />
                      </div>
                    </Style.DailyWeatherItems>
                  );
                })}
              </Style.DailyWeatherItem>
            );
          })
        : null}
    </Style.DailyWeatheritemWrapper>
  )
}

export default observer(CityDailyWeather);
