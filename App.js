// U78784426
// src/App.js
import React from 'react';
import PersonalInfo from './components/Experience';
import Skills from './components/Education';
import Experience from './components/PersonalInfo';
import Education from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
    </div> );
}

export default App;