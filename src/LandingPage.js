import React from 'react'
import {Navbar} from './components/Navbar'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes/Routes';
import {Footer} from './components/Footer';
import {useChangeLanguage} from './hooks/useChangeLanguage';


export const LandingPage = () => {
  
  const { changeLanguage, handleOnChange } = useChangeLanguage();
 
  return (
    <BrowserRouter>
      <Navbar 
        handleOnChange={handleOnChange}
        changeLanguage={changeLanguage}
      />
      <Routes />
      <Footer 
        changeLanguage={changeLanguage}
      />
    </BrowserRouter>
  );
}
