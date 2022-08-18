export interface IDataTypes {
  dt: number;
  dt_txt: string;
  main: Imain;
  weather: IWeatherData[];
}

export interface Icoord {
  lat: number;
  lon: number;
}

export interface ICity {
  coord: Icoord;
  id: number;
  name: string;
}

export interface IWeatherData {
  id: number;
  icon: string;
  main: string;
}

export interface Imain {
  temp: number;
}

export interface IResult {
  data: {
    city: ICity;
    list: IDataTypes[];
  }
}

export interface Ioverride {
  display: string;
  margin: string;
  marginTop: string;
}

export interface ICityContent {
  id: Date;
  name: string;
}

export interface ICheckName {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

export interface ILocation {
  coords: {
    latitude: number;
    longitude: number;
  }
}
