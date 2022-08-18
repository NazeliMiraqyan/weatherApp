import { store } from '../../../mobx/store';
import { observer } from 'mobx-react';
import * as Style from './DailyWeather.style';

const DailyWeather = () => {
  return (
    <Style.DailyWeatherItemWrapper>
      {store.dayData.map((dayItem) => {
        let temp = store.tempNow(dayItem.main.temp);

        return (
          <Style.DailyWeatherItem
            key={dayItem.dt}
            onClick={() => store.addToCurrentItem(dayItem.dt, dayItem.dt_txt)}
          >
            <p>{dayItem.dt_txt.slice(5, 10)}</p>

            {dayItem.weather.map((day) => {
              return (
                <Style.DailyWeatherItems key={dayItem.dt}>
                  <h1>
                    {!temp
                      ? Math.floor(dayItem.main.temp - 273.15) + '°C'
                      : temp}
                  </h1>
                  <div>
                    <Style.Img
                      src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                    />
                  </div>
                </Style.DailyWeatherItems>
              )
            })}
          </Style.DailyWeatherItem>
        )
      })}
    </Style.DailyWeatherItemWrapper>
  )
}

export default observer(DailyWeather);
