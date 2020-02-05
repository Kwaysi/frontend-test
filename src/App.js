import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="app-main">

      </div>
    </div>
  );
}

export default App;
