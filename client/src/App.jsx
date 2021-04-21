import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ChatRoom from "./components/ChatRoom/ChatRoom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={ChatRoom} />
    </Router>
  );
};
export default App;
