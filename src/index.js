import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Components/AppNavbar';
import Home from './Pages/Home';
import Chatbot from './Pages/Chatbot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Router>
        <header>
          <AppNavbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>
);

