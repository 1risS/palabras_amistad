import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nube from './nubePalabras'
import Home from './home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nube" element={<Nube />} />
    </Routes>
  </BrowserRouter>
);

