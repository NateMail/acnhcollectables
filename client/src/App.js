import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <MainRouter />
  </Router>
);

export default App;
