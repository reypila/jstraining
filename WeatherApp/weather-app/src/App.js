import React from 'react';
// start
import WeatherLocation from './components/WeatherLocation'
// end
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherLocation city='Mexico,mx'/>
    </div>
  );
}

export default App;
