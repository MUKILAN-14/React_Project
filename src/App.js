import React from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import './App.css';

const App = () => {
  return (
    <div id="ex">
      <Greeting name="Mukilan"/>
      <h1>Welcome to React, Mukilan!</h1>
      <Counter />  
    </div>
  );
};

export default App;
