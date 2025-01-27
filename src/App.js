import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
