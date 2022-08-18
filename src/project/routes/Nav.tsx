import React from 'react';
import { Outlet } from 'react-router-dom';
import ToggleTemp from '../components/toggle/Toggle';
import * as Style from './Nav.style';

const NavBar: React.FC = () => {
  return (
    <>
      <Style.Nav>
        <Style.Ul>
          <Style.Li>
            <Style.Link to="/">Home</Style.Link>
          </Style.Li>
          <Style.Li>
            <Style.Link to="/weather">Favorite Cities</Style.Link>
          </Style.Li>
          <Style.Li>
            <ToggleTemp />
          </Style.Li>
        </Style.Ul>
      </Style.Nav>
      <Outlet />
    </>
  )
}

export default NavBar
