import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './pages/Home/index.jsx';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
