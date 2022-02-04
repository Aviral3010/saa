// import React from 'React';
// import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          
        </Routes>
    
    </Router>
  );
}

export default App;
