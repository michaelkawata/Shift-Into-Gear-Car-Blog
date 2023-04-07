import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './components/Navbar.css';
import Home from "./components/pages/Home";
import CreatePost from "./components/pages/CreatePost";
import CreateUser from "./components/pages/CreateUser";
import ShowPost from './components/pages/ShowPost';


//In react-router-dom v6, "Switch" is replaced by routes "Routes"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/posts/:id" element={<ShowPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

