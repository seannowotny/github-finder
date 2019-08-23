import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component<{}> {
  render() {
    return (
      <nav className='App'>
        <Navbar />
      </nav>
    );
  }
}

export default App;
