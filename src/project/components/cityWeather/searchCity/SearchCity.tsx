import React from 'react';
import { useState, useEffect } from 'react';
import { store } from '../../../mobx/store';
import Cities from 'cities.json';
import { ICityContent, ICheckName } from '../../../mobx/types';
import * as Style from './SearchCity.style';

const SearchCity: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [cityContent, setcityContent] = useState<ICityContent[]>(getData());

  const addNewCity = () => {
    const checkName = (Cities as ICheckName[]).find(
      (city) =>
        city.name ===
        cityName.charAt(0).toUpperCase() +
          cityName.slice(1).toLocaleLowerCase(),
    );
    const isCityInContent = cityContent.some(
      (item) => item.name === checkName?.name,
    );

    if (checkName && !isCityInContent) {
      setcityContent([
        ...cityContent,
        {
          id: new Date(),
          name:
            cityName.charAt(0).toUpperCase() +
            cityName.slice(1).toLocaleLowerCase(),
        },
      ]);

      setCityName('');
    } else if (isCityInContent) {
      alert('City is already added');
      setCityName('');
    } else {
      alert('Enter City Name');
      setCityName('');
    }
  }
  useEffect(() => {
    localStorage.setItem('cityName', JSON.stringify(cityContent));
  }, [cityContent]);

  function getData() {
    const data = localStorage.getItem('cityName');

    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  const dataFetch = (name: string) => {
    let lat: undefined;
    let lon: undefined;

    store.CurrentLocation(lat, lon, name);
  }

  const removeItem = (id: Date) => {
    const remove = cityContent.filter((city) => {
      return city.id !== id;
    })

    setcityContent(remove);
  }

  return (
    <Style.SearchCityWrapper>
      <>
        <Style.Form
          onSubmit={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
          }}
        >
          <Style.Input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <Style.Button onClick={addNewCity}>Add City +</Style.Button>
        </Style.Form>
      </>
      <Style.SearchCityItems>
        {cityContent.length !== 0
          ? cityContent.map((item) => {
              return (
                <Style.SearchCityItem onClick={() => dataFetch(item.name)}>
                  <Style.NavLinkStyle to={item.name}>
                    <div key={item.name}>
                      <p>{item.name}</p>
                    </div>
                  </Style.NavLinkStyle>

                  <Style.Svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15pt"
                    viewBox="0 0 512 512"
                    width="15pt"
                    onClick={() => removeItem(item.id)}
                  >
                    <path
                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                      fill="#f44336"
                    />
                    <path
                      d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 
                      4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 
                      64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 
                      0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 
                      21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 
                      21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                      fill="#fafafa"
                    />
                  </Style.Svg>
                </Style.SearchCityItem>
              )
            })
          : 'Empty ....'}
      </Style.SearchCityItems>
    </Style.SearchCityWrapper>
  )
}
export default SearchCity
