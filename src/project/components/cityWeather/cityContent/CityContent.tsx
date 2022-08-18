import { observer } from 'mobx-react-lite';
import React from 'react';
import CityCurrentWeather from '../CityCurrentWeather/CityCurrentWeather';
import CityDailyWeather from '../cityDailyWeather/CityDailyWeather';
import CityHourlyWeather from '../cityHourlyWeather/CityHourlyWeather';
import * as Style from './cityContent.style';

const Content: React.FC = () => {
  return (
    <>
      <Style.CurrentItemWapper>
        <Style.CurrentItem>
          <CityCurrentWeather />
        </Style.CurrentItem>
        <Style.HourlyItem>
          <CityHourlyWeather />
        </Style.HourlyItem>
      </Style.CurrentItemWapper>
      <Style.DailyItem>
        <CityDailyWeather />
      </Style.DailyItem>
    </>
  )
}

export default observer(Content);
