import { makeAutoObservable, runInAction } from "mobx";
import { Url, Location } from "../api/api";
import axios from "axios";
import { IDataTypes, IResult } from "./types";

export class WeatherStore {
  dayData: IDataTypes[] = [];
  WeatherData: IResult[] = [];
  currentItem: IDataTypes[] = [];
  hourlyWeather: IDataTypes[] = [];
  dayHourlyWeather: IDataTypes[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addData = () => {
    return new Date().toJSON().slice(0, 10);
  };

  fiveDays = () => {
    let hour: number | string = new Date().getHours();

    if (hour > 0 && hour < 3) {
      hour = "0" + 0;
    } else if (hour > 3 && hour < 6) {
      hour = "0" + 3;
    } else if (hour > 6 && hour < 9) {
      hour = "0" + 6;
    } else if (hour > 9 && hour < 12) {
      hour = "0" + 9;
    } else if (hour > 12 && hour < 15) {
      hour = 12;
    } else if (hour > 15 && hour < 18) {
      hour = 15;
    } else if (hour > 18 && hour < 21) {
      hour = 18;
    } else {
      hour = 21;
    }

    return hour + ":00:00";
  };

  CurrentLocation = async (
    lat: number | undefined = undefined,
    lon: number | undefined = undefined,
    city: string | undefined = undefined
  ) => {
    try {
      let resp: IResult;

      if (city === undefined) {
        resp = await axios.get(Location(lat, lon));
      } else {
        resp = await axios.get(Url(city));
      }

      runInAction(() => {
        this.WeatherData = [resp];
        this.dayHourlyWeather = [...resp.data.list];
        this.hourlyWeather = [...resp.data.list].filter((item) =>
          item.dt_txt.includes(this.addData())
        );
        this.dayData = [...resp.data.list].filter((item) =>
          item.dt_txt.includes(this.fiveDays())
        );
        this.currentItem = [...this.dayData].filter((_, index) => index === 0);
      });
    } catch (error) {
      console.log(error);
    }
  };

  addToCurrentItem = (dt: number, day: string) => {
    this.currentItem = [...this.dayData].filter((item) => item.dt === dt);
    store.hourlyWeather = [...store.dayHourlyWeather].filter(
      (item) => item.dt_txt.slice(0, 10) === day.slice(0, 10)
    );
  };

  changeTemperature: string = "";

  tempNow(temp: number) {
    if (this.changeTemperature === "C") {
      return Math.floor((temp - 273.14) * 1.8 + 32) + "°F";
    }
    return Math.floor(temp - 273.14) + "°C";
  }

  currentTemp(deg: string) {
    return (this.changeTemperature = deg);
  }
}

export const store = new WeatherStore();
