import React from 'react';
import './App.scss';

import LeftColumn from "./components/LeftColumn/LeftColumn"
import CenterColumn from "./components/CenterColumn/CenterColumn"
import RightColumn from "./components/RightColumn/RightColumn";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-column-container"><LeftColumn /></div>
        <div className="center-column-container"><CenterColumn /></div>
        <div className="right-column-container"><RightColumn /></div>
      </div>
    );
  }
}

export default App;
