import React from 'react';
import logo from './logo.svg';
import './App.css';
import StockData from './components/StockData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Stock Information</h1>
        <StockData />
      </header>
    </div>
  );
}

export default App;
