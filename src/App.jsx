import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter basename="/teamwork">
            <Home />
        </BrowserRouter>
    );
}

export default App;
