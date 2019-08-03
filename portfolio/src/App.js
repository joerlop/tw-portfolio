import React from 'react';
import './App.scss';
import { Route, NavLink } from "react-router-dom";

import LeftColumn from "./components/LeftColumn/LeftColumn"
import CenterColumn from "./components/CenterColumn/CenterColumn"

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-column-container"><LeftColumn /></div>
        <div className="center-column-container"><CenterColumn /></div>
        <div className="right-column-container">A</div>
      </div>
    );
  }
}

export default App;
