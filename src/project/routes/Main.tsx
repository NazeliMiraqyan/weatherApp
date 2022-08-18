import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav';
import Cities from '../pages/cities/Cities';
import Home from '../pages/home/Home';
import SinglePage from '../pages/singlePage/SinglePage';

const Main: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Cities />} />
            <Route path="weather/:name" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
