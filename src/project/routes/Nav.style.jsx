import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: indigo;
  position: relative;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`
export const Li = styled.li`
  color: #fff;
  list-style-type: none;
`
export const Link = styled(NavLink)`
  font-size: 20px;
  color: white;
  padding: 0 10px;
  text-decoration: none;
`
