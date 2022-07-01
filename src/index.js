import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nube from './nubePalabras'
import Home from './home';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nube" element={<Nube />} />
    </Routes>
  </HashRouter>
);


