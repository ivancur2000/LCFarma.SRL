import React from 'react'
import {Navbar} from './components/Navbar'
import {BrowserRouter} from 'react-router-dom';

export const LandingPage = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}
