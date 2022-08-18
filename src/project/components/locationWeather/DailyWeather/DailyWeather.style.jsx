import styled from 'styled-components';

export const DailyWeatherItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 10px;
`
export const DailyWeatherItem = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s linear;
`
export const DailyWeatherItems = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-around;
`

export const Img = styled.img`
  width: 80px;
  margin-top: 5px;
`
