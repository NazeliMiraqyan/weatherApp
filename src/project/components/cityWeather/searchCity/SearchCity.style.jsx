import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchCityWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
`
export const SearchCityItems = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`
export const Form = styled.div`
  text-align: center;
`
export const Input = styled.input`
  text-transform: capitalize;
  border: none;
  border-bottom: 1px solid #000;
  margin-right: 10px;
  outline: none;
  padding: 10px;
`
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #f4a460;
  cursor: pointer;
  transition: background-color 0.2s linear;
  color: #fff;
  outline: none;
`
export const SearchCityItem = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 10px 10px 0;
  transition: box-shadow 0.2s linear;
`
export const NavLinkStyle = styled(Link)`
  width: 65%;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  word-wrap: break-word;
`
export const Svg = styled.svg`
  margin-top: 15px;
  cursor: pointer;
`
