


import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* add route to home for final submission */}

      <a class="nav-link text-primary" href="/"><h1>Shift Into Gear</h1></a>


      <div class="fluid navbar-fluid" id="navbarNav">
        <ul class="nav navbar-nav navbar-left">
          {/* <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/createpost">+Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createuser">+User</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;