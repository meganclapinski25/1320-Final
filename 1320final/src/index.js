

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import MovieDetails from './components/MovieDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        
      </Routes>
    </Router>
  
);

reportWebVitals();
