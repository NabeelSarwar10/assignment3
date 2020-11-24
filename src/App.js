import React from 'react';
import './App.css';
import Dinner from './dinner'

function App() {
  return (
    <div className = "App">
   <Dinner cityName="Sialkot" countryName="Pakistan" languageName="React" teacherName="Aamir Pinger"></Dinner>
    </div>
  );
}

export default App;
