import React from 'react';
import Homepage from './components/Home/HomePage'
import LandingPage from './components/LandingPage/Landingpage';
import './App.css';

function app() {
  if (window.location.pathname === '/React_Project/home') {
    return <Homepage />;
  }
  return <LandingPage />;
}
const App =()=>{
  return(
    <div className='content'>
      {app()}
    </div>
  )
}

export default App;
