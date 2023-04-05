import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';
import Home from './components/pages/Home';
import Post from './components/pages/Post';


//In react-router-dom v6, "Switch" is replaced by routes "Routes"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element= {<Home />} />
          <Route path='/post' element= {<Post />} />
        </Routes>
        </Router>
    </>
  );
}
  
export default App;