import React, { Component } from "react";
 import CharachterList from './components/CharachterList'
 import HeroList from "./components/HeroList";
 import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>my super squad</h2>
        <CharachterList />
        <HeroList/>
      </div>
    );
  }
}

export default App;
