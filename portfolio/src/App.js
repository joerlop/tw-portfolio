import React from 'react';
import './App.scss';

import LeftColumn from "./components/LeftColumn/LeftColumn"

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-column-container"><LeftColumn /></div>
        <div className="center-column-container">A</div>
        <div className="right-column-container">A</div>
      </div>
    );
  }
}

export default App;
