import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* add route to home for final submission */}
    
      <h1 class="nav-link" href="/home">Car Bloggery</h1>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav navbar-center">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/createpost">Create Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/createuser">Create User</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;