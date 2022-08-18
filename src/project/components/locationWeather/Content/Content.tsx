import { observer } from 'mobx-react-lite';
import React from 'react';
import CurrentWeather from '../CurrentWeather.jsx/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import { useState, useEffect } from 'react';
import { store } from '../../../mobx/store';
import CircleLoader from 'react-spinners/CircleLoader';
import * as Style from './Content.style';
import { override } from './Content.style';
import { ILocation } from '../../../mobx/types';

const Content: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position: ILocation) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      store.CurrentLocation(latitude, longitude);
    }

    getLocation()

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <>
      {loading === true ? (
        <CircleLoader
          color={'#9013FE'}
          loading={loading}
          cssOverride={override}
          size={350}
        />
      ) : (
        <>
          <Style.CurrentItemWapper>
            <Style.CurrentItem>
              <CurrentWeather />
            </Style.CurrentItem>
            <Style.HourlyItem>
              <HourlyWeather />
            </Style.HourlyItem>
          </Style.CurrentItemWapper>
          <Style.DailyItem>
            <DailyWeather />
          </Style.DailyItem>
        </>
      )}
    </>
  )
}

export default observer(Content);
