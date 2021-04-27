import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "../src/css/material-ui-tb.css";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/Chat" exact component={Chat} />
    </Router>
  );
};
export default App;
