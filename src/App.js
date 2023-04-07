import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './components/Navbar.css';
import Home from "./components/pages/Home";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import CreateUser from "./components/pages/CreateUser";


//In react-router-dom v6, "Switch" is replaced by routes "Routes"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element= {<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createuser" element= {<CreateUser />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
