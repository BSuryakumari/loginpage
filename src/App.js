import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import OneBox from './components/OneBox';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/OneBox" element={<OneBox />} />
      </Routes>
    </Router>
  );
}

export default App;
