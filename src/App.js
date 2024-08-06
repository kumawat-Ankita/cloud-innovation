import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './Pages/MainRoutes';
import Navbar from './Pages/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainRoutes />
    </Router>
  );
};

export default App;
