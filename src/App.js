import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}


export default App;
