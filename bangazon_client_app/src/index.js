import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Bangazon from "./components/bangazon.js";

ReactDOM.render(
  <Router>
    <Bangazon />
  </Router>,
  document.getElementById("root")
);